import React from 'react';
import style, { contactDetailStyle, contactDetailNewGroupStyle } from '../styles/Contact.style'
import iconStyle from '../styles/Icon.style'

const contactDetailIcons = {
  email: 'envelope',
  phone: 'mobile',
  address: 'map-pin',
  website: 'chrome',
  twitter: 'twitter',
  linkedIn: 'linkedin',
  gitHub: 'github',
}

const ContactDetailItem = ({
  text,
  icon,
  startOfNewGroup,
}, i, j, k) => {
  const s = startOfNewGroup
    ? { ...contactDetailStyle, ...contactDetailNewGroupStyle }
    : contactDetailStyle
  return (
    <li
      className="contact-detail"
      style={ s }
    >
      <i className={ `fa fa-${ icon }` } style={ iconStyle } />
      { text }
    </li>
  )
}

export default props => {
  const listItems = Object.keys(contactDetailIcons)
    .filter(key => props[key])
    .map((key, i) => (
      <ContactDetailItem
        key={ key }
        text={ props[key] }
        icon={ contactDetailIcons[key] }
        startOfNewGroup={ i === 3 }
      />
    ))
  return (
    <aside id="contact" style={ style }>
      <ul>
        { listItems }
      </ul>
    </aside>
  )
}
