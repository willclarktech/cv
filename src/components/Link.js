import React from 'react'

const protocols = [
  'http:',
  'https:',
  'mailto:',
  'tel:',
]

export default ({
  href,
  text,
}) => {
  const h = protocols.some(p => href.indexOf(p) === 0)
    ? href
    : `https://${ href }`
  return (
    <a href={ h }>
      { text }
    </a>
  )
}
