import React from 'react'
import './SongList.css'
import SongEdit from './SongEdit'

interface ManageMusic{
  song_id : number,
  judul : string,
  penyanyi : string,
  audio_path : string
}

interface Props {
    songList: ManageMusic[],
    setSongList: React.Dispatch<React.SetStateAction<ManageMusic[]>>
}

const SongList: React.FC<Props> = ({ songList, setSongList }) => {
  return (
    <div className='song-list'>
        {songList.map((song) => {
            return <SongEdit 
                song={song} 
                songList={songList}
                setSongList={setSongList}
                
            />
        })}
    </div>
    
  )
}

export default SongList