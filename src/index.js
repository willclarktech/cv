import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import content from '../content'
import './index.css'

ReactDOM.render(
  <App content={ content } />,
  document.getElementById('root')
);
