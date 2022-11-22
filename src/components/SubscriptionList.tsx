import React from 'react'
import './SubscriptionList.css'
import SubscriptionRequest from './SubscriptionRequest'

interface Subscription {
    user: string,
    singer: string
}

interface Props {
    subscriptionList: Subscription[],
    setSubscriptionList: React.Dispatch<React.SetStateAction<Subscription[]>>
}

const SubscriptionList: React.FC<Props> = ({ subscriptionList, setSubscriptionList }) => {
  return (
    <div className='subscription-list'>
        {subscriptionList.map((subscription) => {
            return <SubscriptionRequest 
                subscription={subscription} 
                subscriptionList={subscriptionList}
                setSubscriptionList={setSubscriptionList}
            />
        })}
    </div>
  )
}

export default SubscriptionList