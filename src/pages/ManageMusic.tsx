import React from 'react'
import "./ManageMusic.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const ManageMusic = () => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className='main'>
        <h1>ManageMusic</h1>
      </div>
    </div>
  )
}

export default ManageMusic