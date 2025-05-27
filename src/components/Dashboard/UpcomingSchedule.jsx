import React from 'react'
import SimpleAppointmentCard from '../SimpleAppoinment/SimpleAppointmentCard'
import { upcomingschedule } from '../../data/upcomingschedule'
const UpcomingSchedule = () => {
  return (
   <div className="upcoming-schedule">
  <h3 className="schedule-heading">The Upcoming Schedule</h3>

  {upcomingschedule.map(({ day, appointments }) => (
   <div className={`schedule-day ${day.toLowerCase()}`} key={day}>
      <h4>On {day}</h4>
      <div className="cards-row">
        {appointments.map(({ title, time, icon }, index) => (
          <SimpleAppointmentCard
            key={index}
            title={title}
            time={time}
            icon={icon}
              customClass={`card-${index * 2 + index + 1}`}
          />
        ))}
      </div>
    </div>
  ))}
</div>

  )
}

export default UpcomingSchedule