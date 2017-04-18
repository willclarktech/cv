import variables from './_variables.style'

const {
  leftColumnWidthPercentage,
  headingLetterSpacing,
  highlightColor,
  h1FontSize,
  h2FontSize,
  defaultFontWeight,
} = variables

export const aside = {
  display: 'inline-block',
  float: 'left',
  width: `${ leftColumnWidthPercentage * 100 }%`,
}

export const mainContent = {
  display: 'inline-block',
  width: `${ 100 - (leftColumnWidthPercentage * 100) }%`,
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

export const h2 = {
  ...mainHeading,
  fontSize: h2FontSize,
  display: 'flex',
}
