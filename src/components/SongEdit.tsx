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
                <p className='judul'>{song.judul}</p>
                <p className='penyanyi'>{song.penyanyi}</p>
                <p className='audio-path'>{song.audio_path}</p>
                <button className='btn-edit'>Edit</button>
                <button className='btn-delete'>Delete</button>
            </form>
        </div>

    )
}

export default SongEdit