import React from 'react'
import style, {
  notFirstSectionStyle,
  sectionHeadingStyle,
  ruleLeftStyle,
  ruleRightStyle,
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
    <th>
      <div className="timeline-item-title">{ title }</div>
      <div className="timeline-item-organisation">{ organization }</div>
      <div className="timeline-item-dates">
        { console.log(dates) || dates.map(formatDate).join(' — ') }
      </div>
    </th>
    <td>
      { description }
    </td>
  </tr>
)

export default ({
  title,
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
        <span style={ ruleRightStyle } />
      </h2>
      <table className="timeline">
        { timeline.map(TimelineItem) }
      </table>
    </section>
  )
}
