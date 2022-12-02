import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Subscription.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SubscriptionList from '../components/SubscriptionList';

interface Subscription {
  user: string,
  singer: string
}

const Subscription = () => {  

  const [subs, setSubs] = useState<any[]>([]);
  useEffect(() => {
    const getsubs = async () => {
        try {
          const { data } = await axios.post("http://localhost:8000/subscribe", {});
          // alert(data.return[0].status);
          if (data) {
            setSubs(data.return);
          }
        }
        catch (err) {
          alert(err);
        } 
    
      };
    getsubs();
  }, []);

  // console.log(data);
  // console.log(typeof data);
  
  let subsList: Subscription[] = [];
  for (var i = 0; i<subs.length; i++) {
    const tempSub : Subscription = {
      'user': subs[i].subscriber_id,
      'singer': subs[i].creator_id
    }
    subsList.push(tempSub);
  }

  console.log(subsList);
  
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className='main-subscription'>
          {/* <p>{subs[0].status}</p> */}
          {/* {
              subs.map((sub) => {
                    return (
                      <div style={{color:"white"}}>
                        <h4>{sub.creator_id}</h4>
                        <h4>{sub.subscriber_id}</h4>
                        <h4>{sub.status}</h4>
                      </div>
                    );
                  })
                }  */}
          <SubscriptionList  subscriptionList={subsList} setSubscriptionList={setSubs}/>
      </div>
    </div>
  )
}

export default Subscription