import React from 'react'
import { ChevronDown } from 'lucide-react';
import AnatomySection from './AnatomySection';

const DashboardOverview = () => {
  return (
    <div className='dashboard'>
      <h2>
      Dashboard</h2>
      <span className='week'>This week  <ChevronDown size={16} className='down'/></span>
    
      </div>
  )
}

export default DashboardOverview