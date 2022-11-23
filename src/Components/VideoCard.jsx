import React from 'react'
import { useParams } from 'react-router-dom'

export default function VideoCard({ video }) {
    let { id } = useParams();
  return (
    <div className='VideoCard'>
        <img src={video.thumbnail.url} />
        <p>{video.title}</p>
    </div>
  )
}
