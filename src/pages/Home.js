//Home.js in main branch
import React from "react";
import { useState } from "react";
import VideoList from "../Components/VideoList";
import Modal from "../Modal";

export default function Home({ videos, setVideos }) {
  const [search, setSearch] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${search}&maxResults=5`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.items);
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
        setIsOpen(true);
      });
    setSearch("");
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
      {isOpen ? (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Something went wrong. Please try again.
        </Modal>
      ) : null}
    </div>
  );
}
