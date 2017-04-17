import React from 'react';

const contactDetailIcons = {
  email: 'envelope',
  phone: 'mobile',
  address: 'pin',
  website: 'globe',
  twitter: 'twitter',
  linkedIn: 'linkedin',
  gitHub: 'github',
}

const ContactDetailItem = ({
  text,
  icon,
}) => (
  <li className="contact-detail">
    <i className={ `fa fa-${ icon }` } />
    { text }
  </li>
)

export default props => {
  const listItems = Object.keys(contactDetailIcons)
    .filter(key => props[key])
    .map(key => (
      <ContactDetailItem
        key={ key }
        text={ props[key] }
        icon={ contactDetailIcons[key] }
      />
    ))
  return (
    <aside id="contact">
      <ul>
        { listItems }
      </ul>
    </aside>
  )
}
