import React from 'react'

const ActivityFeed = ({activity}) => {
   return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <span className="activity-subtext">3 appointments on this week</span>
      </div>
      <div className="activity-chart">
        {activity.map((day, index) => {
          const isHighlighted = ['Tues', 'Fri', 'Sun'].includes(day);
          return (
            <div className="activity-day" key={index}>
              <div className="bars">
                <div
                  className="bar"
                  style={{
                    height: isHighlighted ? '45px' : '25px',
                    backgroundColor: '#27d3d6',
                  }}
                />
                <div
                  className="bar"
                  style={{
                    height: isHighlighted ? '60px' : '35px',
                    backgroundColor: '#1a2e88',
                  }}
                />
                <div
                  className="bar"
                  style={{
                    height: '20px',
                    backgroundColor: '#ccc',
                  }}
                />
              </div>
              <div className="day-name">{day}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ActivityFeed