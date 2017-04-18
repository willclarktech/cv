import React from 'react';
import style, {
  contactListStyle,
  contactDetailStyle,
  contactDetailNewGroupStyle,
} from '../styles/Contact.style'
import {
  linkStyle,
} from '../styles/App.style'
import Icon from './Icon'

const contactDetailIcons = {
  email: 'envelope',
  phone: 'mobile',
  address: 'map-pin',
  website: 'chrome',
  twitter: 'twitter',
  linkedIn: 'linkedin',
  gitHub: 'github',
}

const contactDetailHrefPrefixes = {
  email: 'mailto:',
  phone: 'tel:',
  address: 'https://www.google.com/maps/place/',
  website: 'http://',
  twitter: 'https://twitter.com/',
  linkedIn: 'https://linkedin.com/in/',
  gitHub: 'https://github.com/',
}

const getHref = (name, text) => {
  const prefix = contactDetailHrefPrefixes[name]
  const suffix = name === 'address'
    ? text.replace(/\s/g, '+')
    : text
  return `${ prefix }${ suffix }`
}

const ContactLink = ({
  name,
  text,
}) => {
  const href = getHref(name, text)
  return (
    <a href={ href } style={ linkStyle }>
      { text }
    </a>
  )
}

const ContactDetailItem = ({
  name,
  text,
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
      <Icon name={ contactDetailIcons[name] } />
      <ContactLink name={ name } text={ text } />
    </li>
  )
}

export default props => {
  const listItems = Object.keys(contactDetailIcons)
    .filter(key => props[key])
    .map((key, i) => (
      <ContactDetailItem
        key={ key }
        name={ key }
        text={ props[key] }
        startOfNewGroup={ i === 3 }
      />
    ))
  return (
    <aside id="contact" style={ style }>
      <ul style={ contactListStyle }>
        { listItems }
      </ul>
    </aside>
  )
}
