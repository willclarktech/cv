import React from 'react'
import Markdown from 'react-markdown'
import style, {
  sectionHeadingStyle,
  subHeadingStyle,
  ruleLeftStyle,
  ruleRightStyle,
  timelineStyle,
  timelineHeaderCellStyle,
  timelineCellStyle,
  timelineCellQuickStyle,
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
  quick,
}) => {
  const thStyle = quick
    ? { ...timelineHeaderCellStyle, ...timelineCellQuickStyle }
    : timelineHeaderCellStyle
  const tdStyle = quick
    ? { ...timelineCellStyle, ...timelineCellQuickStyle }
    : timelineCellStyle

  return (
    <tr>
      <th style={ thStyle }>
        <div style={ timelineItemTitleStyle }>{ title }</div>
        <div style={ timelineItemOrganisationStyle }>{ organization }</div>
        { dates && (
          <div style={ timelineItemDatesStyle }>
            { dates.map(formatDate).join(' — ') }
          </div>
        ) }
      </th>
      <td style={ tdStyle }>
        <Markdown
          source={ description }
          skipHtml={ !process.env.REACT_APP_ALLOW_HTML_IN_MARKDOWN }
        />
      </td>
    </tr>
  )
}

export default ({
  title,
  subtitle,
  timeline,
  isFirstSection,
}) => {
  const id = title.split(' ').join('-')

  return (
    <section id={ id } style={ style }>
      <span style={ ruleLeftStyle } />
      <h2 style={ sectionHeadingStyle }>
        { title }
        { subtitle && (<span style={ subHeadingStyle }>{ subtitle }</span>) }
        <span style={ ruleRightStyle } />
      </h2>
      <table style={ timelineStyle }>
        <tbody>
          { timeline.map((item, i) => (
            <TimelineItem
              key={ `${ item.title }@${ item.organization }` }
              quick={ title === 'Skills' && i !== timeline.length - 1 }
              { ...item }
            />
          )) }
        </tbody>
      </table>
    </section>
  )
}
