import React from 'react'

export default function VideoCard({ video }) {
  return (
    <div className='VideoCard'>
        <img src={video.thumbnail.url} />
        <p>{video.title}</p>
    </div>
  )
}
