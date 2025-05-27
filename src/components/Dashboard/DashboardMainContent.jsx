import React from 'react'
import DashboardOverview from '../Dashboard/DashboardOverview'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import { HEALTH_CARDS } from '../../data/healthData'
import { activity } from '../../data/activity'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'
import { calendardata } from '../../data/calender'
import UpcomingSchedule from './UpcomingSchedule'

const DashboardMainContent = () => {
  return (
    <div className='dashboard-main'>
      <div className="left-section">
        <DashboardOverview />
        <div className="anatomy-health">
          <AnatomySection />
            <HealthStatusCards healthcards={HEALTH_CARDS}/>
             <ActivityFeed activity={activity} />
        </div>
        </div>
        <div className='right-section'>
          <CalendarView calendar={calendardata}/>
          <UpcomingSchedule/>
          
        </div>

    </div>
  )
}

export default DashboardMainContent