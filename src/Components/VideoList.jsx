import React from 'react'
// import VideoCard from './VideoCard'
import { Link } from "react-router-dom"

export default function VideoList({ videos }) {
    
  return (
    <article>
        <ul>
      {videos.map((video, i) => {
        
        return (
            <li key={`${video.videoId}-${i}`} className='videoCard'>
                <Link to={`/videos/${video.videoId}`} >
                    <img src={video.thumbnail.url} alt={video.title} />
                    <p>{video.title}</p>
                </Link>
            </li>
        )
      })}
      </ul>
    </article>
  )
}
