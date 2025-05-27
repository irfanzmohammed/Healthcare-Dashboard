import React from 'react'
import { ZoomIn } from 'lucide-react';

const AnatomySection = () => {
  return (
    <div className='anatomy-box'>
       <ZoomIn className='zoom-icon' size={16}/>
      <img src='src/assets/humanbody.png' alt='humanbody' className='humanbody'/>
      <div className="health-label heart">❤️ Healthy Heart</div>
      <div className="health-label leg">🦵 Healthy Leg</div>
    </div>
  )
}

export default AnatomySection