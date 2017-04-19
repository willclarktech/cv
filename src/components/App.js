import React, { Component } from 'react'
import style from '../styles/App.style'
import RobotsTxt from './RobotsTxt'
import Intro from './Intro'
import Contact from './Contact'
import Section from './Section'
import Footer from './Footer'

class App extends Component {
  render() {
    const {
      intro,
      contact,
      sections,
      footer,
    } = this.props.content
    return (
      <div className="App" style={ style }>
        { process.env.REACT_APP_SAY_HI_TO_ROBOTS && <RobotsTxt /> }
        <header>
          <Contact { ...contact } />
          <Intro {...intro } />
        </header>
        <main>
          { sections
            .map((section, i) => (
              <Section
                key={ section.title }
                { ...section }
              />
            ))
          }
        </main>
        <Footer { ...footer } />
      </div>
    );
  }
}

export default App;
