import React from 'react'
import "./Sidebar.css"

const sidebaradmin = () => {
  return (
    <div className='side'>
        <a href='/' className='header'>Binotify</a>
        <a href='/subscription'>Subscription</a>
        <a href='/logout'>Log Out</a>
    </div>
  )
}

export default sidebaradmin