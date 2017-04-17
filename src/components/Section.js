import React from 'react';

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const formatDate = date =>
  date === 'present'
    ? date
    : `${ monthNames[date.getMonth()] } ${ date.getFullYear() }`

const TimelineItem = ({
  title,
  organization,
  dates,
  description,
}) => (
  <tr>
    <th>
      <div class="timeline-item-title">{ title }</div>
      <div class="timeline-item-organisation">{ organization }</div>
      <div class="timeline-item-dates">
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
  const id = title
    .split(' ')
    .join('-')

  return (
    <section id={ id }>
      <h2>{ title }</h2>
      <table class="timeline">
        { timeline.map(TimelineItem) }
      </table>
    </section>
  )
}
