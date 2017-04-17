import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Intro from '../components/Intro'
import Contact from '../components/Contact'
import Section from '../components/Section'
import Footer from '../components/Footer'

storiesOf('Intro', module)
  .add('with name and summary', () => (
    <Intro
      name="Testy McTestface"
      summary="Test developer with made up skills and no life"
    />
  ))

const timeline = [
  {
    title: 'Current position',
    organization: 'Testy’s tests',
    dates: [new Date('2000-01-01'), 'present'],
    description: 'Test description for testing the description.',
  },
  {
    title: 'Previous position',
    organization: 'Test: you know, for testing',
    dates: [new Date('1990-01-01'), new Date('1999-12-31')],
    description: 'Test description for testing the description.',
  },
  {
    title: 'First position',
    organization: 'Test: you know, for testing',
    dates: [new Date('1970-01-01'), new Date('1989-12-31')],
    description: 'Test description for testing the description. This description is longer because descriptions can be longer sometimes. Test description for testing the description. This description is longer because descriptions can be longer sometimes. Test description for testing the description. This description is longer because descriptions can be longer sometimes. Test description for testing the description. This description is longer because descriptions can be longer sometimes. Test description for testing the description. This description is longer because descriptions can be longer sometimes. Test description for testing the description. This description is longer because descriptions can be longer sometimes.',
  },
]

storiesOf('Section', module)
  .add('with title and timeline', () => (
    <Section
      title="Example"
      timeline={ timeline }
    />
  ))

storiesOf('Contact', module)
  .add('with everything', () => (
    <Contact
      email="name@email.com"
      phone="+00 (0)123 4567 8910"
      address="123 XXX Str, 00000 Cityton"
      website="website.tld"
      twitter="@twitter"
      linkedIn="linkedIn"
      gitHub="gitHub"
    />
  ))

storiesOf('Footer', module)
  .add('with GitHub link', () => (
    <Footer
      link="https://github.com/testymctestface/cv"
    />
  ))
