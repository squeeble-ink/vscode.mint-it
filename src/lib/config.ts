import * as vscode from 'vscode'

export type TagConfig = {
  style: vscode.DecorationRenderOptions
  tag: string
}

export type MintItConfig = {
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
  JSDocs = 'JSDocs',
  NoLines = 'None',
}

export const GetConfig = (): MintItConfig => {
  const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration(
    'mint-it',
  )

  return {
    delay: config.get('delay') as number,
    enabled: config.get('comments') as CommentType,
    tags: config.get('tags') as TagConfig[],
  }
}
