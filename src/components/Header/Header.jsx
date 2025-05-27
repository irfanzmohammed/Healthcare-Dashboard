import React from 'react'
import { Search, Plus } from 'lucide-react';
import { IoNotifications } from "react-icons/io5";
const Header = () => {
  return (
    <div className='header'>
      
        <h2 className="logo" >
            <span className='health'>Health</span><span className='care'>care.</span>
        </h2>
        <div className='search-box'>
        <Search
         className="search-icon" 
         size={16}/>
        <input type="text" placeholder="Search" />
        <IoNotifications
         className="bell-icon" 
         size={16}
         stroke="blue"/>
      </div>
      <div className="right-icons">
      <button className='avatar' >👦🏻</button>
      <button className='add-btn'><Plus className="icon" /></button>

      </div>
      
    </div>
  )
}

export default Header