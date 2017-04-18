import React from 'react'
import style from '../styles/RobotsTxt.style'

const keywords = [
  // Companies
  'AirBnB',
  'Apple',
  'Facebook',
  'Google',
  'Instagram',
  'LinkedIn',
  'Microsoft',

  // JavaScript
  'ECMAScript',
  'ES',
  'ES2015',
  'ES2016',
  'ES2017',
  'ES2018',
  'ES2019',
  'ES2020',
  'ES6',
  'ES7',
  'ES8',
  'ES9',
  'ES10',
  'JavaScript',
  'JS',
  'TypeScript',
  'CoffeeScript',

  // Other languages
  'Bash',
  'BASIC',
  'C',
  'C++',
  'C#',
  'COBOL',
  'Clojure',
  'Caml',
  'Curl',
  'Elixir',
  'Elm',
  'Elmlang',
  'Emacs',
  'Erlang',
  'F#',
  'Fortran',
  'Go',
  'GoLang',
  'GraphQL',
  'Haskell',
  'Java',
  'Lisp',
  'Lua',
  'MATLAB',
  'Mercury',
  'Objective-C',
  'OCaml',
  'Pascal',
  'Perl',
  'PHP',
  'PowerShell',
  'Python',
  'Python 2',
  'Python 3',
  'Python 4',
  'REST',
  'Ruby',
  'Rust',
  'Scala',
  'Swift',
  'Tex',
  'Visual Basic',
  'Zsh',

  // Other Technologies
  'React',
  'Redux',
  'Flux',
  'Elasticsearch',
  'Logstash',
  'Kibana',
  'Filebeat',
  'microservices',
  'Machine learning',
  'Artificial intelligence',
  'Neural networks',

  // Skills
  'SEO',
  'E2E testing',
  'TDD',
  'BDD',
  'DDD',

  // Experience
  '20 Years Experience',
  'Twenty Years Experience',
  '15 Years Experience',
  'Fifteen Years Experience',
  '10 Years Experience',
  'Ten Years Experience',
  '8 Years Experience',
  'Eight Years Experience',
]

export default () => (
  <div style={ style }>
    { keywords.join(' ') }
  </div>
)
