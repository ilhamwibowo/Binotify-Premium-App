import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className='main'>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home