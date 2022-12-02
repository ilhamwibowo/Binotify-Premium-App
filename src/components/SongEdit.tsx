import React from 'react'
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
    return(
        <div className='song-edit'>
            <form className='grid'>
                <p className='song-id'>{song.song_id}</p>
                <input type="text" className='input-lagu' id="judul" defaultValue={song.judul}/>
                <input type="text" className='input-lagu' id="penyanyi" defaultValue={song.penyanyi} />
                <input type="text" className='input-lagu' id="audio-path" defaultValue={song.audio_path} />
                <button className='btn-edit'>Edit</button>
                <button className='btn-delete'>Delete</button>
            </form>
        </div>
    )
}

export default SongEdit