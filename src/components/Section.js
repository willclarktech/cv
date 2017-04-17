import React from 'react';

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
}) => {
  const id = title.split(' ').join('-')

  return (
    <section id={ id }>
      <h2>{ title }</h2>
      <table className="timeline">
        { timeline.map(TimelineItem) }
      </table>
    </section>
  )
}
