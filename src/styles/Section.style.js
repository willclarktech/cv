import variables from './_variables.style'
import { h2 } from './_mixins.style'

const {
  mainTextColor,
  lightTextColor,
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
  paddingRight: '5mm',
  width: `${ leftColumnWidthPercentage * 100 }%`,
  textAlign: 'left',
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
