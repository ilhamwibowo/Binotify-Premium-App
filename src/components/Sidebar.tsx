import React from 'react'
import "./Sidebar.css"

const sidebar = () => {
  return (
    <div className='side'>
        <a href='/' className='header'>Binotify</a>
        <a href='/subscription'>Subscription</a>
        <a href='/manage-music'>Manage Music</a>
    </div>
  )
}

export default sidebar