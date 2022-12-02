import React from 'react'
import axios from 'axios'
import './SubscriptionRequest.css'
import { Navigate, useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate();

  const handleAccept = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const subData ={
      creator_id: subscription.singer,
      subscriber_id: subscription.user
    };

    try {
      const { data } = await axios.post("http://localhost:8000/subscribe/accept", subData);
      window.location.reload();
    } catch (e) {
      alert(e);
    }
  }

  const handleReject = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const subData ={
      creator_id: subscription.singer,
      subscriber_id: subscription.user
    };

    try {
      const { data } = await axios.post("http://localhost:8000/subscribe/reject", subData);
      window.location.reload();
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className='subscription-request'>
      <form className='grid' method="post" action="localhost:9999/subscription">
        <p className='user'>User ID : {subscription.user}</p>
        <p className='singer'>Artist ID :{subscription.singer}</p>
        <button onClick={handleAccept} className='btn accept'>Accept</button>
        <button onClick={handleReject} className='btn decline'>Decline</button>
      </form>
    </div>
  )
}

export default SubscriptionRequest