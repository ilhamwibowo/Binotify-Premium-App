import React, { useState} from 'react'
import "./ManageMusic.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SongEdit from '../components/SongEdit';
import SongList from '../components/SongList';

interface ManageMusic{
  song_id : number,
  judul : string,
  penyanyi : string,
  audio_path : string
}

const ManageMusic = () => {
  const [songList, setSongList] = useState<ManageMusic[]>([{song_id: 1, judul: "Dynamite", penyanyi: "Blackpink", audio_path: "https://www.youtube.com/watch?v=gdZLi9oWNZg"}, {song_id: 2, judul: "Ice Cream", penyanyi: "Blackpink", audio_path: "https://www.youtube.com/watch?v=gdZLi9oWNZg"}])
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
     
      <div className='main-manage-music'>
          <SongList songList={songList} setSongList={setSongList}/>
          <button className='btn-add-song'>Add Song</button>     
      </div>
      
    </div>
  )
}

export default ManageMusic