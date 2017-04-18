import variables from './_variables.style.js'

const {
  mainFont,
  baseFontSize,
  mainTextColor,
} = variables

export default {
  fontFamily: mainFont,
  fontSize: baseFontSize,
  color: mainTextColor,
  WebkitPrintColorAdjust: 'exact',
}
