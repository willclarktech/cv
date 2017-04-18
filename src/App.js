import React, { Component } from 'react';
import style from './styles/App.style'
import Intro from './components/Intro'
import Contact from './components/Contact'
import Section from './components/Section'
import Footer from './components/Footer'
import {
  intro,
  contact,
  sections,
  footer,
} from '../config'

class App extends Component {
  render() {
    return (
      <div className="App" style={ style }>
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
