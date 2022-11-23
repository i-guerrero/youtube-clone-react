import React from 'react'
import VideoCard from './VideoCard'
import { Link } from "react-router-dom"

export default function VideoList({ videos }) {
    
  return (
    <div>
      {videos.map((video, i) => {
        
        return (
            <div key={`${video.id}-${i}`} className='videoCard'>
                <Link to="/videos" ><VideoCard video={video} /></Link>
            </div>
        )
      })}
    </div>
  )
}
