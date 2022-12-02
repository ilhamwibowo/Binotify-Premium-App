import React from 'react'
import "./Sidebar.css"
import Logout from '../pages/Logout';

const sidebar = () => {
  return (
    <div className='side'>
        <a href='/' className='header'>Binotify</a>
        <a href='/subscription'>Subscription</a>
        <a href='/manage-music'>Manage Music</a>
        <a href='/logout'>Log Out</a>
    </div>
  )
}

export default sidebar