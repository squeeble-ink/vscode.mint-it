import * as vscode from 'vscode'

export type TagConfig = {
  style: vscode.DecorationRenderOptions
  tag: string
}

export type TrepidInkConfig = {
  delay: number
  enabled: string
  tags: TagConfig[]
}

export type TagData = {
  tag: string
  endTag: string
  style: vscode.TextEditorDecorationType
  ranges: vscode.DecorationOptions[]
}

export type CommentDefinition = {
  languageId: string | string[]
  singleLineComment: string
  blockCommentStart: string
  blockCommentEnd: string
  commentType: CommentType
}

export enum CommentType {
  AllLines = 'All',
  MultiLines = 'Block',
  SingleLine = 'Single',
  NoLines = 'No',
}

export const GetConfig = (): TrepidInkConfig => {
  const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration(
    'trepid-ink',
  )

  return {
    delay: config.get('delay') as number,
    enabled: config.get('comments') as CommentType,
    tags: config.get('tags') as TagConfig[],
  }
}
