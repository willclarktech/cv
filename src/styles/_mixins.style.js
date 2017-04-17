import variables from './_variables.style'

const { leftColumnWidth } = variables

export const aside = {
  display: 'inline-block',
  float: 'left',
  width: `${ leftColumnWidth * 100 }%`,
}
