import * as vscode from 'vscode'
import {
  CommentDefinition,
  CommentType,
  GetConfig,
  TagData,
} from './config'
import { languages } from './languages'

export class Parser {
  private _tags: TagData[] = []
  private _regEx: string = ''

  private _singleLineComment: string = ''
  private _blockCommentStart: string = ''
  private _blockCommentEnd: string = ''

  private _commentType: CommentType = CommentType.AllLines

  private _supportedLanguage: boolean = false

  public get supportedLanguage(): boolean {
    return this._supportedLanguage
  }

  public constructor() {
    this._commentType = GetConfig().enabled as CommentType

    GetConfig().tags.forEach((item) => {
      this._tags.push({
        endTag: item.tag.replace(/([()[{*+.$^\\|?])/g, '\\$1'),
        ranges: [],
        style: vscode.window.createTextEditorDecorationType(
          item.style,
        ),
        tag: item.tag,
      })
    })
  }

  private _SetBreaks(languageId: string) {
    console.log(languageId)

    this._supportedLanguage = false

    languages.forEach((comment) => {
      if (typeof comment.languageId === 'string') {
        if (comment.languageId === languageId) {
          this._supportedLanguage = true
        }
      } else {
        comment.languageId.forEach((language) => {
          if (language === languageId) {
            this._supportedLanguage = true
          }
        })
      }

      if (this._supportedLanguage) {
        this._SetCommentBreaks(comment)
        return
      }
    })
  }

  private _SetCommentBreaks(commentData: CommentDefinition) {
    const single = commentData.singleLineComment
    const start = commentData.blockCommentStart
    const end = commentData.blockCommentEnd

    if (
      (commentData.commentType === CommentType.AllLines ||
        commentData.commentType === CommentType.SingleLine) &&
      (this._commentType === CommentType.AllLines ||
        this._commentType === CommentType.SingleLine)
    ) {
      this._singleLineComment = single
    }

    if (
      (commentData.commentType === CommentType.AllLines ||
        commentData.commentType === CommentType.MultiLines) &&
      (this._commentType === CommentType.AllLines ||
        this._commentType === CommentType.MultiLines)
    ) {
      this._blockCommentStart = this._EndRegEx(start)
      this._blockCommentEnd = this._EndRegEx(end)
    }
  }

  private _EndRegEx(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  private _GetCharacters(): string[] {
    const characters: string[] = []
    this._tags.forEach(({ endTag }) => {
      characters.push(endTag)
    })

    return characters
  }

  private _Check(
    match: RegExpExecArray | null,
    startPos: vscode.Position,
    endPos: vscode.Position,
  ) {
    const range = { range: new vscode.Range(startPos, endPos) }

    if (match !== null) {
      // @ts-ginore
      const matchTag = this._tags.find((item) => {
        return item.tag.toLowerCase() === match[3].toLowerCase()
      })
      if (matchTag) {
        matchTag.ranges.push(range)
      }
    }
  }

  public SetRegex(languageId: string) {
    this._SetBreaks(languageId)

    if (!this.supportedLanguage) {
      return
    }

    const comment = this._singleLineComment.replace(/\//gi, '\\/')
    const matches = this._GetCharacters().join('|')

    this._regEx = `(${comment})+( |\t)*(${matches})+(.*)`
  }

  public FindSingleLineComments(activeEditor: vscode.TextEditor) {
    const text = activeEditor.document.getText()
    const regEx = new RegExp(this._regEx, 'gi')

    let match: RegExpExecArray | null
    while ((match = regEx.exec(text))) {
      const startPosNr =
        match.index + match[2].length + this._singleLineComment.length
      const endPosNr = match.index + match[0].length

      const startPos = activeEditor.document.positionAt(startPosNr)
      const endPos = activeEditor.document.positionAt(endPosNr)
      this._Check(match, startPos, endPos)
    }
  }

  public FindBlockComments(activeEditor: vscode.TextEditor) {
    const text = activeEditor.document.getText()
    const matches = this._GetCharacters().join('|')
    const start = this._blockCommentStart
    const end = this._blockCommentEnd

    const regExString = `(^|[ \t])(${start}[\\s])+([\\s\\S]*?)(${end}|\n)`
    const regExSingle = `(${start})+([ \t]* \t*)(${matches})([ ]*|[:])+(${end}|[^\r\n]*)`
    const regExComment = `(^|)+(${start})+([\\s\\S]*?)(${end})`
    const RegExMulti = `(^)+([ \t]*| \t*|)(${matches})([ ]*|[:])+([^\r\n]*)`

    const stringRegEx = new RegExp(regExString, 'gm')
    const singleRegEx = new RegExp(regExSingle, 'gi')
    const commentRegEx = new RegExp(regExComment, 'gm')
    const multiRegEx = new RegExp(RegExMulti, 'gim')

    let multi: RegExpExecArray | null
    while ((multi = commentRegEx.exec(text))) {
      let commentBlock = multi[0]

      let line: RegExpExecArray | null
      while ((line = multiRegEx.exec(commentBlock))) {
        const startPosNr = multi.index + line.index + line[2].length
        const endPosNr = multi.index + line.index + line[0].length

        const startPos = activeEditor.document.positionAt(startPosNr)
        const endPos = activeEditor.document.positionAt(endPosNr)
        this._Check(line, startPos, endPos)
      }
    }

    let single: RegExpExecArray | null
    while ((single = stringRegEx.exec(text))) {
      const commentBlock = single[0]

      let line: RegExpExecArray | null
      while ((line = singleRegEx.exec(commentBlock))) {
        const startPosNr =
          single.index + this._blockCommentStart.length
        const endPosNr =
          single.index +
          single[0].length -
          this._blockCommentEnd.length

        const startPos = activeEditor.document.positionAt(startPosNr)
        const endPos = activeEditor.document.positionAt(endPosNr)
        this._Check(line, startPos, endPos)
      }
    }
  }

  public FindJSDocComments(activeEditor: vscode.TextEditor) {
    const text = activeEditor.document.getText()
    const matches = this._GetCharacters().join('|')

    const regExComment = `(^)+([ \t]*\\* \t*)(${matches})([ ]*|[:])+([^\r\n]*)`

    const stringRegEx = /(^|)+(\/\*\*)+([\s\S]*?)(\*\/)/gm
    const commentRegEx = new RegExp(regExComment, 'gim')

    let match: RegExpExecArray | null
    while ((match = stringRegEx.exec(text))) {
      let commentBlock = match[0]

      let line: RegExpExecArray | null
      while ((line = commentRegEx.exec(commentBlock))) {
        const startPosNr = match.index + line.index + line[2].length
        const endPosNr = match.index + line.index + line[0].length

        const startPos = activeEditor.document.positionAt(startPosNr)
        const endPos = activeEditor.document.positionAt(endPosNr)
        this._Check(line, startPos, endPos)
      }
    }
  }

  public ApplyStyle(activeEditor: vscode.TextEditor) {
    this._tags.forEach((tag) => {
      activeEditor.setDecorations(tag.style, tag.ranges)
      tag.ranges.length = 0
    })
  }
}
