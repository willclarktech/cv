import React from 'react'
import style, {
  notFirstSectionStyle,
  sectionHeadingStyle,
  subHeadingStyle,
  ruleLeftStyle,
  ruleRightStyle,
  timelineStyle,
  timelineHeaderCellStyle,
  timelineCellStyle,
  timelineItemTitleStyle,
  timelineItemOrganisationStyle,
  timelineItemDatesStyle,
} from '../styles/Section.style'

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const formatDate = date =>
  date instanceof Date
    ? `${ monthNames[date.getMonth()] } ${ date.getFullYear() }`
    : date

const TimelineItem = ({
  title,
  organization,
  dates,
  description,
}) => (
  <tr>
    <th style={ timelineHeaderCellStyle }>
      <div style={ timelineItemTitleStyle }>{ title }</div>
      <div style={ timelineItemOrganisationStyle }>{ organization }</div>
      { dates && (
        <div style={ timelineItemDatesStyle }>
          { dates.map(formatDate).join(' — ') }
        </div>
      ) }
    </th>
    <td style={ timelineCellStyle }>
      { description }
    </td>
  </tr>
)

export default ({
  title,
  subtitle,
  timeline,
  isFirstSection,
}) => {
  const id = title.split(' ').join('-')
  const s = isFirstSection
    ? style
    : { ...style, ...notFirstSectionStyle }

  return (
    <section id={ id } style={ s }>
      <span style={ ruleLeftStyle } />
      <h2 style={ sectionHeadingStyle }>
        { title }
        { subtitle && (<span style={ subHeadingStyle }>{ subtitle }</span>) }
        <span style={ ruleRightStyle } />
      </h2>
      <table style={ timelineStyle }>
        <tbody>
          { timeline.map(item => (
            <TimelineItem
              key={ `${ item.title }@${ item.organization }` }
              { ...item }
            />
          )) }
        </tbody>
      </table>
    </section>
  )
}
