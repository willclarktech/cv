import variables from './_variables.style.js'

const {
  mainFont,
  baseFontSize,
  mainTextColor,
  highlightColor,
} = variables

export const linkStyle = {
  textDecoration: 'none',
  color: mainTextColor,
}

export const highlightStyle = {
  color: highlightColor,
}

export default {
  position: 'relative',
  height: '100%',
  fontFamily: mainFont,
  fontSize: baseFontSize,
  color: mainTextColor,
  WebkitPrintColorAdjust: 'exact',
}
