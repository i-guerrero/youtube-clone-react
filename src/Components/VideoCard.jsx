import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';

export default function VideoCard({ videos }) {
    let { id } = useParams();
    // const [video] = videos.filter(video => video.videoId === id);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    function onReady(e) {
        e.target.pauseVideo();
    }
  return (
    <div className='VideoCard'>
        {/* <iframe src={`https://www.youtube.com/embed/${video.id}`} /> */}
        <YouTube videoId={id} sandbox="allow-presentation" opts={opts} onReady={(e) => onReady(e)} />
        {/* <img src={video.thumbnail.url} alt={video.title} />
        <p>{video.title}</p> */}
        {/* sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation" */}
    </div>
  )
}
