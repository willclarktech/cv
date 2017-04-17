import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro'
import Contact from './components/Intro'
import Section from './components/Intro'
import Footer from './components/Intro'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Contact />
          <Intro />
        </header>
        <main>
          <Section />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
