import { useState, useEffect } from "react";

export default function List() {
  const [video, setVideo] = useState("people");
  const [data,  setData] = useState([]);
 



  useEffect(() => {
    // https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}
    // https://www.googleapis.com/youtube/v3/videos/${result.id.videoId}
    // https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${video}&maxResults=5`
    const url = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`; 
    const result = JSON.parse(window.localStorage.getItem(video));
    
    if (result) {
      // If we have a the data saved in localhost we don't make a fetch request
      setData(result);
    } else {
      fetch(url)
        .then((resp) => resp.json())
        .then((res) => {
          console.log(`I ran a fetch for ${video}`);
          // We save the data from the fetch request on localhost so that next time we choose that category it goes to localhost and not to fetch
          window.localStorage.setItem(video, JSON.stringify(res));
          // I want to set my state with the data
          setData(res);
        });
    }
  }, [video]);

  return (
    <div className="list">
      <h2>Choose A Video</h2>
      <select value={video} onChange={(e) => setVideo(e.target.value)}>
        <option value=""></option>
        <option value="">Previous Searches</option>
      </select>
      {data &&
        data.map((item) => <h2 key={item.id}>{item.name || item.title}</h2>)}
    </div>
  );
}
