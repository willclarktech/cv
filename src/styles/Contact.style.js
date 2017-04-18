import variables from './_variables.style'
import { aside } from './_mixins.style'

const { smallFontSize } = variables

export const contactListStyle = {
  padding: 0,
 }

export const contactDetailStyle = {
  listStyle: 'none',
  paddingBottom: '1.2mm',
}

export const contactDetailNewGroupStyle = {
  paddingTop: '3.6mm',
}

export default {
  ...aside,
  fontSize: smallFontSize,
}
