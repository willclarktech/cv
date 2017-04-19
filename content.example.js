// Copy this to content.js and complete with your own information.

const blah = n => Array(n).fill('blah').join(' ')

const intro = {
  name: 'Will Clark',
  summary: 'Test developer with made up skills and experience, best known for the Y2K Bug',
}

const contact = {
  email: 'testy@email.com',
  phone: '+00 (0)123 4567 9010',
  // address: '123 Test Street, 12345 Testington',
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

module.exports = {
  intro,
  contact,
  sections,
  footer,
}
