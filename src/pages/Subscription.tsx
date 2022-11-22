import React from 'react'
import "./Subscription.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SubscriptionRequest from '../components/SubscriptionRequest';

const Subscription = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className='main-subscription'>
        <SubscriptionRequest />
        <SubscriptionRequest />
        <SubscriptionRequest />
      </div>
    </div>
  )
}

export default Subscription