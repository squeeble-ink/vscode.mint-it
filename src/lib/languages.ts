import { CommentDefinition, CommentType } from './config'

// NOTE: This is to keep the comment configuration together
// tslint:disable: object-literal-sort-keys
export const languages: CommentDefinition[] = [
  {
    languageId: [
      'javascript',
      'javascriptreact',
      'typescript',
      'typescriptreact',
      'c',
      'cpp',
      'csharp',
      'go',
      'java',
      'jsonc',
      'kotlin',
      'less',
      'php',
      'scss',
      'sass',
      'vue',
    ],
    singleLineComment: '//',
    blockCommentStart: '/*',
    blockCommentEnd: '*/',
    commentType: CommentType.AllLines,
  },
  {
    languageId: ['css'],
    singleLineComment: '',
    blockCommentStart: '/*',
    blockCommentEnd: '*/',
    commentType: CommentType.MultiLines,
  },
  {
    languageId: ['html', 'markdown', 'xml'],
    singleLineComment: '',
    blockCommentStart: '<!--',
    blockCommentEnd: '-->',
    commentType: CommentType.MultiLines,
  },
  {
    languageId: 'aspnetcorerazor',
    singleLineComment: '',
    blockCommentStart: '@*',
    blockCommentEnd: '*@',
    commentType: CommentType.MultiLines,
  },
  {
    languageId: ['dockerfile', 'graphql', 'yaml'],
    singleLineComment: '#',
    blockCommentStart: '',
    blockCommentEnd: '',
    commentType: CommentType.SingleLine,
  },
  {
    languageId: 'python',
    singleLineComment: '#',
    blockCommentStart: '"""',
    blockCommentEnd: '"""',
    commentType: CommentType.AllLines,
  }
]
