import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import content from '../content'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App content={ content }/>, div)
});
