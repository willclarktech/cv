// Copy this to src/content.js and complete with your own information.
const {
  REACT_APP_STRIP_PRIVATE_DATA: STRIP_PRIVATE_DATA,
  REACT_APP_EMAIL: EMAIL,
  REACT_APP_PHONE: PHONE,
  REACT_APP_ADDRESS: ADDRESS,
} = process.env

// This function can be removed when placeholders are no longer required
const blah = n => Array(n).fill('blah').join(' ')

const redact = info => STRIP_PRIVATE_DATA
  ? '[redacted]'
  : info


const intro = {
  name: 'Will Clark',
  summary: 'Test developer with made up skills and experience, best known for the Y2K Bug',
}

const contact = {
  email: redact(EMAIL),
  phone: redact(PHONE),
  address: redact(ADDRESS),
  website: 'willclark.tech',
  twitter: '@willclarktech',
  linkedIn: 'willclarktech',
  gitHub: 'willclarktech',
}

const sections = [
  {
    title: 'Development Experience',
    timeline: [
      {
        title: 'Current job',
        dates: [new Date('2000-01-01'), 'present'],
        description: blah(60),
      },
      {
        title: 'Previous job',
        dates: [new Date('1970-01-01'), new Date('1999-12-31')],
        description: blah(60),
      },
    ],
  },
  {
    title: 'Skills',
    subtitle: 'with brief indication of level',
    timeline: [
      {
        title: 'Some cool skill',
        description: blah(30),
      },
      {
        title: 'Another cool skill',
        description: blah(30),
      },
      {
        title: 'This is also cool',
        description: blah(30),
      },
      {
        title: 'This one not so much',
        description: blah(30),
      },
      {
        title: 'Just kidding, it’s cool',
        description: blah(30),
      },
      {
        title: 'More skills',
        description: blah(30),
      },
      {
        title: 'More',
        description: blah(30),
      },
      {
        title: 'Testing',
        description: blah(30),
      },
    ],
  },
  {
    title: 'Education',
    timeline: [
      {
        title: 'Test Education',
        organization: 'Test School',
        dates: [new Date('2000-01-01'), 'present'],
        description: blah(40),
      },
      {
        title: 'More Education',
        organization: 'Test School',
        dates: [new Date('1970-01-01'), new Date('1999-01-01')],
        description: blah(40),
      },
      {
        title: 'Month-Long Education',
        organization: 'Test School',
        dates: [new Date('1969-12')],
        description: blah(40),
      },
    ],
  },
]

const footer = {
  link: 'github.com/willclarktech/cv',
}

export default {
  intro,
  contact,
  sections,
  footer,
}
