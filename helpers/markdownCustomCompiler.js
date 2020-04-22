const footnotes = require('markdown-it-footnote')
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
}).use(footnotes)


export const markdownCustomCompiler = (body) => {


  return md.render(body)
} 