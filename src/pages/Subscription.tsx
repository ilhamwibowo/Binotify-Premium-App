import React, { useState } from 'react'
import "./Subscription.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SubscriptionList from '../components/SubscriptionList';

interface Subscription {
  user: string,
  singer: string
}

const Subscription = () => {
  const [subscriptionList, setSubscriptionList] = useState<Subscription[]>([{user: "Akmal", singer:"Hivi"}, {user: 'Ilham', singer:"Blackpink"}])
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className='main-subscription'>
          <SubscriptionList  subscriptionList={subscriptionList} setSubscriptionList={setSubscriptionList}/>
      </div>
    </div>
  )
}

export default Subscription