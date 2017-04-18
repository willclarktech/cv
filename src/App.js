import React, { Component } from 'react'
import style from './styles/App.style'
import RobotsTxt from './components/RobotsTxt'
import Intro from './components/Intro'
import Contact from './components/Contact'
import Section from './components/Section'
import Footer from './components/Footer'

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
                isFirstSection={ !i }
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
