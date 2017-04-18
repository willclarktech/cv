import variables from './_variables.style'
import { h2 } from './_mixins.style'

const {
  mainTextColor,
  lightTextColor,
  baseFontSize,
  defaultFontWeight,
  leftColumnWidthPercentage,
} = variables

const timelineItemFontSize = '0.8em'
const ruleGapPercentage = 4

export const notFirstSectionStyle = {
  marginTop: '10mm',
}

export const sectionHeadingStyle = {
  ...h2,
}

export const subHeadingStyle = {
  color: lightTextColor,
  fontSize: baseFontSize,
  textTransform: 'initial',
  paddingLeft: `${ ruleGapPercentage / 2 }%`,
  paddingTop: '0.5mm', // HACK
}

const ruleStyle = {
  width: `${ leftColumnWidthPercentage * 100 - ruleGapPercentage }%`,
  borderBottom: `1px solid ${ mainTextColor }`,
}

export const ruleLeftStyle = {
  ...ruleStyle,
  float: 'left',
  margin: `1.5% ${ ruleGapPercentage }% 1.5% 0`,
}

export const ruleRightStyle = {
  ...ruleStyle,
  flex: 1,
  margin: `2.2% 0 1.5% ${ ruleGapPercentage }%`,
  height: 0,
}

export const timelineStyle = {
  width: '100%',
}

export const timelineCellStyle = {
  paddingBottom: '8mm',
}

export const timelineHeaderCellStyle = {
  ...timelineCellStyle,
  paddingRight: `${ ruleGapPercentage }%`,
  width: `${ leftColumnWidthPercentage * 100 }%`,
  textAlign: 'right',
}

export const timelineItemTitleStyle = {
  fontWeight: defaultFontWeight * 1.2,
}

export const timelineItemDatesStyle = {
  fontSize: timelineItemFontSize,
  fontWeight: defaultFontWeight,
  color: lightTextColor,
}

export const timelineItemOrganisationStyle = {
  fontSize: timelineItemFontSize,
  fontWeight: defaultFontWeight,
  color: lightTextColor,
}

export default {}
