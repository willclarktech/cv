import React from 'react'
import iconStyle from '../styles/Icon.style'

export default ({ name }) => (
  <i
    className={ `fa fa-${ name }` }
    style={ iconStyle }
  />
)
