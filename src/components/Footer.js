import React from 'react';
import style from '../styles/Footer.style'
import { linkStyle, highlightStyle } from '../styles/App.style'

export default ({ link }) => {
  const href = link.indexOf('http') === 0
    ? link
    : `https://${ link }`
  return (
    <footer style={ style }>
      { 'Made with React: source code at ' }
      <a href={ href } style={ { ...linkStyle, ...highlightStyle } }>
        { link }
      </a>
    </footer>
  )
}
