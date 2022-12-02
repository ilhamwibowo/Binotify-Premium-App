import React from 'react'
import axios from 'axios';
import './SongEdit.css'

interface ManageMusic{
    song_id : number,
    judul : string,
    penyanyi : string,
    audio_path : string
}

interface Props {
    song: ManageMusic,
    songList: ManageMusic[],
    setSongList: React.Dispatch<React.SetStateAction<ManageMusic[]>>
}

const SongEdit: React.FC<Props> = ({song, songList, setSongList }) => {

    const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const songData ={
            song_id: song.song_id,
        };
    
        try {
          const { data } = await axios.post("http://localhost:8000/song/delete", songData);
          window.location.reload();
        } catch (e) {
          alert(e);
        }
      }

    return(
        <div className='song-edit'>
            <form className='grid'>
                <p className='song-id'>{song.song_id}</p>
                <input type="text" className='input-lagu' id="judul" defaultValue={song.judul}/>
                <input type="text" className='input-lagu' id="penyanyi" defaultValue={song.penyanyi} />
                <input type="text" className='input-lagu' id="audio-path" defaultValue={song.audio_path} />
                <button className='btn-edit'>Edit</button>
                <button onClick={handleDelete} className='btn-delete'>Delete</button>
            </form>
        </div>
    )
}

export default SongEdit