import React from 'react'
import { MoveRight,MoveLeft } from 'lucide-react';
const CalendarView = ({calendar}) => {
  return (
     <div className="calendar-container">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="calendar-nav">
          <MoveLeft size={16} style={{ marginRight: '8px' }}/>
             <MoveRight size={16} />
        </div>
      </div>

      <div className="calendar-grid">
        {calendar.map((day, index) => (
          <div key={index} className="calendar-day">
            <div className="day-header">
              <div className="day-name">{day.day}</div>
              <div className="day-date">{day.date}</div>
            </div>

            <div className="time-slots">
              {day.times.map((time, index) => (
                <div
                  key={index}
                  className={`time-slot ${day.highlights.includes(time) ? "highlight" : ""}`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='appoinments'>
        <div className='card-dentist'>
          <p className='doctor'>Dentist <span className="tooth-emoji">🦷</span></p>
          <p className='time'>09:00-11:00</p>
          <p className='doc-name'>Dr.Cameron williamson</p>
        </div>
     
      <div className="card-physio">
      <p className="doctor">Physiotherapy Appointment <span className="arm-emoji">💪🏻</span> </p>
      <p className="time">11:00–12:00</p>
      <p className="doc-name">Dr. Kevin Djones</p>
       </div>
     </div>
    </div>
  )
}

export default CalendarView