import React from 'react'
import "./Subscription.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Subscription = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className='main'>
        <h1>Subscription</h1>
      </div>
    </div>
  )
}

export default Subscription