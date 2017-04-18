import variables from './_variables.style'
import { h2 } from './_mixins.style'

const {
  mainTextColor,
  leftColumnWidthPercentage,
} = variables

export const notFirstSectionStyle = {
  marginTop: '10mm',
}

export const sectionHeadingStyle = {
  ...h2,
}

const ruleGapPercentage = 4

const rule = {
  width: `${ leftColumnWidthPercentage * 100 - ruleGapPercentage }%`,
  borderBottom: `1px solid ${ mainTextColor }`,
}

export const ruleLeftStyle = {
  ...rule,
  float: 'left',
  margin: `1.5% ${ ruleGapPercentage }% 1.5% 0`,
}

export const ruleRightStyle = {
  ...rule,
  flex: 1,
  margin: `2.2% 0 1.5% ${ ruleGapPercentage }%`,
  height: 0,
}

export default {

}
