import React from 'react'
import './SubscriptionRequest.css'

interface Subscription {
  user: string,
  singer: string
}

interface Props { 
  subscription: Subscription,
  subscriptionList: Subscription[],
  setSubscriptionList: React.Dispatch<React.SetStateAction<Subscription[]>>
}

const SubscriptionRequest: React.FC<Props> = ({subscription, subscriptionList, setSubscriptionList}) => {
  return (
    <div className='subscription-request'>
      <form className='grid'>
        <p className='user'>{subscription.user}</p>
        <p className='singer'>{subscription.singer}</p>
        <button className='btn accept'>Accept</button>
        <button className='btn decline'>Decline</button>
      </form>
    </div>
  )
}

export default SubscriptionRequest