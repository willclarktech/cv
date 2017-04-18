import React from 'react'
import style, { highlightStyle } from '../styles/Link.style'

const protocols = [
  'http:',
  'https:',
  'mailto:',
  'tel:',
]

export default ({
  href,
  text,
  highlight,
}) => {
  const h = protocols.some(p => href.indexOf(p) === 0)
    ? href
    : `https://${ href }`
  const s = highlight
    ? { ...style, ...highlightStyle }
    : style
  return (
    <a
      href={ h }
      style={ s }>
      { text }
    </a>
  )
}
