import variables from './_variables.style'

const {
  leftColumnWidth,
  headingLetterSpacing,
  highlightColor,
  h1FontSize,
  defaultFontWeight,
} = variables

export const aside = {
  display: 'inline-block',
  float: 'left',
  width: `${ leftColumnWidth * 100 }%`,
}

export const mainContent = {
  display: 'inline-block',
  width: `${ 100 - (leftColumnWidth * 100) }%`,
}

export const mainHeading = {
  letterSpacing: headingLetterSpacing,
  textTransform: 'uppercase',
  color: highlightColor,
}

export const h1 = {
  ...mainHeading,
  fontSize: h1FontSize,
  fontWeight: defaultFontWeight * 2,
}
