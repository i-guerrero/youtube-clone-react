import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import YouTube from "react-youtube";
import VideoList from "../Components/VideoList";

export default function Home() {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    console.log(search);
    // searchByKeyword();
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${search}&maxResults=5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        console.log(data.items[0]);
        setSearchResults(data.items);
        console.log("Search Results: " + searchResults);
        setVideos(
          data.items.map((video, i) => {
            return {
              videoId: video.id.videoId,
              title: video.snippet.title,
              thumbnail: video.snippet.thumbnails.default,
            };
          })
        );
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    setSearch("");
  }

  function getVideofromID(id) {
    fetch(`https://www.googleapis.com/youtube/v3/videos/${id}`)
      .then((res) => res.json())
      .then((video) => {
        console.log(video);
        console.log(video.snippet.title);
        console.log(video.snippet.thumbnails);
        return video;
      });
  }

  function mapSearchResults() {
    searchResults.map((result) => {
      getVideofromID(result.id.videoId);
    });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="search"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="cat videos"
        ></input>
        <label></label>
        <input id="submit" type="submit"></input>
      </form>
      {videos.length === 0 ? (
        <p>No search results yet. Please submit a search above.</p>
      ) : (
        <VideoList videos={videos} />
      )}
    </div>
  );
}
