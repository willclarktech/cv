import React from 'react';
import style from '../styles/Footer.style'

export default ({ link }) => (
  <footer style={ style }>
    Made with React: source code at { link }
  </footer>
)
