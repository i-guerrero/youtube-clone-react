import React from "react";
import { useState } from "react";
import VideoList from "../Components/VideoList";
import Modal from "../Modal";

export default function Home({ videos, setVideos }) {
  const [search, setSearch] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    zIndex: 1,
  };

  const OTHER_CONTENT_STYLES = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "red",
    padding: "10px",
  };

  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    console.log(search);
    fetch(
      `https://youtube.googlepis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${search}&maxReults=5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        console.log(data.items[0]);
        // console.log(data.items[0].player);
        // console.log(data.items[0].player.embedHtml);
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
        setIsOpen(true);
        <>
          <div
            style={BUTTON_WRAPPER_STYLES}
            onClick={() => console.log("clicked")}
          >
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              Fancy Modal
            </Modal>
          </div>

          <div style={OTHER_CONTENT_STYLES}>Other Content</div>
        </>;
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
        <div>
          <div
            style={BUTTON_WRAPPER_STYLES}
            onClick={() => console.log("clicked")}
          >
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              Fancy Modal
            </Modal>
          </div>

          <div style={OTHER_CONTENT_STYLES}>Other Content</div>
        </div>
      ) : null}
    </div>
  );
}
