import React, { useState, useEffect } from 'react'
import "./ManageMusic.css"
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SongEdit from '../components/SongEdit';
import SongList from '../components/SongList';
import { send } from 'process';
import axios from 'axios';
import { useCookies } from 'react-cookie';

interface ManageMusic{
  song_id : number,
  judul : string,
  penyanyi : string,
  audio_path : string
}

const ManageMusic = () => {
  document.body.style.backgroundColor = "#121212";
  // const [songList, setSongList] = useState<ManageMusic[]>([{song_id: 1, judul: "Dynamite", penyanyi: "Blackpink", audio_path: "https://www.youtube.com/watch?v=gdZLi9oWNZg"}, {song_id: 2, judul: "Ice Cream", penyanyi: "Blackpink", audio_path: "https://www.youtube.com/watch?v=gdZLi9oWNZg"}])
  
  const [songList, setSongList] = useState<ManageMusic[]>([])
  const [cookies, setCookie, removeCookie] = useCookies(['jwt', 'user_id']);

  useEffect(() => {
    const getSongs = async () => {
        try {
          const url = "http://localhost:8000/song/" + cookies.user_id;
          const { data } = await axios.get(url, {});
          if (data) {
            setSongList(data);
          }
        }
        catch (err) {
          alert(err);
      };
    };
    getSongs();
  }, [cookies]);

  
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
     
      <div className='main-manage-music'>
        <SongList songList={songList} setSongList={setSongList}/>
        <form className='add-song-subpage'>
          <button className='btn-add-song' >Add Song</button> 
          <input type="text" className='new-lagu' id="new-judul" placeholder='Input Title'/>
          <input type="text" className='new-lagu' id="new-penyanyi" placeholder='Input Artist' />
          <input type="text" className='new-lagu' id="new-audio-path" placeholder='Input Audio Path' />
        </form>
      </div>
      
    </div>
  )
}

export default ManageMusic