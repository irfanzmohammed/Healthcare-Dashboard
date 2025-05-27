import React from 'react'

const SimpleAppointmentCard = ({title,icon,time,customClass}) => {
  return (
    <div className={`simple-card ${customClass}`}>
      <div className="card-header">
        <p className="card-title">{title}</p>
        <span className="icon">{icon}</span>
      </div>
      <p className="card-time">{time}</p>
    </div>
  );
}

export default SimpleAppointmentCard