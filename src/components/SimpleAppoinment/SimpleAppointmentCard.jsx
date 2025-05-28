import React from 'react'

const SimpleAppointmentCard = ({title,icon,time,id}) => {
    return (
    <div className="card" id={id}>
      <div className="card-title">
        <span>{title}</span>
        <span className="card-icon">{icon}</span>
      </div>
      <div className="card-time">{time}</div>
    </div>
  );

}

export default SimpleAppointmentCard