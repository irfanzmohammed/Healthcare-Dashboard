import React from 'react'
import { MoveRight } from 'lucide-react';
const HealthStatusCards = ({healthcards}) => {
  return (
    <div className='status-cards'>
     {healthcards.map((card, index) => (
        <div key={index} className="status-card">
          <div className="card-header">
            <div className="card-emoji">{card.emoji}</div>
            <div className="card-name">{card.name}</div>
          </div>
           <div className="card-date">{card.date}</div>
          <div className={`card-bar ${card.status.toLowerCase()}`}></div>
        </div>
      ))}

      <p className='details'>Details  <MoveRight
      className='right-icon'
       size={12} /></p>

    </div>
  )
}

export default HealthStatusCards