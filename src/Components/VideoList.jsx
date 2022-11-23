import React from 'react'

export default function VideoList({ videos }) {
    function getVideofromID (id) {
        fetch(`https://www.googleapis.com/youtube/v3/videos/${id}`)
        .then((res) => res.json())
        .then((video) => {
            console.log(video);
            console.log(video.snippet.title)
            console.log(video.snippet.thumbnails)
        })
    }
  return (
    <div>
      {videos.map(video => {
        
        return (
            <p>{video.id.videoId}</p>
        )
      })}
    </div>
  )
}
