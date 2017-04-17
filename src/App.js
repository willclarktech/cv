import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro'
import Contact from './components/Contact'
import Section from './components/Section'
import Footer from './components/Footer'

const {
  REACT_APP_NAME: name,
  REACT_APP_SUMMARY: summary,

  REACT_APP_EMAIL: email,
  REACT_APP_PHONE: phone,
  REACT_APP_ADDRESS: address,
  REACT_APP_WEBSITE: website,
  REACT_APP_TWITTER: twitter,
  REACT_APP_LINKEDIN: linkedIn,
  REACT_APP_GITHUB: gitHub,

  REACT_APP_FOOTER_LINK: footerLink,
} = process.env

class App extends Component {
  render() {
    const introProps = {
      name,
      summary,
    }

    const contactProps = {
      email,
      phone,
      address,
      website,
      twitter,
      linkedIn,
      gitHub,
    }

    const experienceSectionProps = {
      title: 'Experience',
      timeline: [],
    }

    const educationSectionProps = {
      title: 'Education',
      timeline: [],
    }

    const footerProps = {
      link: footerLink,
    }

    return (
      <div className="App">
        <header>
          <Contact { ...contactProps } />
          <Intro {...introProps } />
        </header>
        <main>
          <Section { ...experienceSectionProps } />
          <Section { ...educationSectionProps } />
        </main>
        <Footer { ...footerProps } />
      </div>
    );
  }
}

export default App;
