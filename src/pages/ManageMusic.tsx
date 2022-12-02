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
  const [addSong, setAddSong] = useState({ judul: "", penyanyi_id: "", audio_path: ""})
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

  const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const songData = {
      judul: addSong.judul,
      penyanyi_id: addSong.penyanyi_id,
      audio_path: addSong.audio_path,
    };

    try {
      const { data } = await axios.post("http://localhost:8000/song", songData);
    } catch (e) {
      alert(e);
    }
  }


  return (
    <div className="container">
      <Navbar />
      <Sidebar />
     
      <div className='main-manage-music'>
        <SongList songList={songList} setSongList={setSongList}/>
        <form className='add-song-subpage' onSubmit={(e) => handleAdd(e)} >
          <button className='btn-add-song' type='submit'>Add Song</button> 
          <input 
            type="text" 
            name="judul" 
            className='new-lagu' 
            id="new-judul" 
            placeholder='Input Title'
            onChange={(e) =>
              setAddSong({ ...addSong, [e.target.name]: e.target.value })
            }
            
          />
          <input 
            type="text" 
            name="penyanyi_id" 
            className='new-lagu' 
            id="new-penyanyi" 
            placeholder='Input Artist' 
            onChange={(e) =>
              setAddSong({ ...addSong, [e.target.name]: e.target.value })
            }
          />
          <input 
            type="text" 
            name="audio_path" 
            className='new-lagu' 
            id="new-audio-path" 
            placeholder='Input Audio Path' 
            onChange={(e) =>
              setAddSong({ ...addSong, [e.target.name]: e.target.value })
            }
          />
        </form>
      </div>
      
    </div>
  )
}

export default ManageMusic