import React from 'react'
import SimpleAppointmentCard from '../SimpleAppoinment/SimpleAppointmentCard'
import { upcomingschedule } from '../../data/upcomingschedule'
const UpcomingSchedule = () => {
   return (
    <div className="schedule-container">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
      {upcomingschedule.map((dayItem) => (
        <div key={dayItem.id} className="day-section">
          <h3 className="day-label">On {dayItem.day}</h3>
          <div className="cards-wrapper">
            {dayItem.appointments.map((appointment) => (
              <SimpleAppointmentCard
                key={appointment.id}
                id={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

}

export default UpcomingSchedule