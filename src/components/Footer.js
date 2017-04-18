import React from 'react';
import style from '../styles/Footer.style'
import Link from './Link'

export default ({ link }) => {
  return (
    <footer style={ style }>
      { 'Made with React: source code at ' }
      <Link
        href={ link }
        text={ link }
        highlight={ true }
      />
    </footer>
  )
}
