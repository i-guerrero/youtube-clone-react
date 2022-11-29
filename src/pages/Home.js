import React from "react";
<<<<<<< HEAD
import { useState } from "react";
import VideoList from "../Components/VideoList";
import Modal from "../Modal";

export default function Home({ videos, setVideos }) {
  const [search, setSearch] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

=======
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import YouTube from "react-youtube";
import Modal from "../Modal";

export default function Home() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> befe34a (resolve conflicts)
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

<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);
=======
  const handleChange = (e) => {
    e.preventDefault();
    the;
    setSearch(e.target.value);
  };
>>>>>>> befe34a (resolve conflicts)

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    console.log(search);
<<<<<<< HEAD
    fetch(
      `https://youtube.googlepis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${search}&maxReults=5`
=======
    // searchByKeyword();
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${search}&maxResults=5`
>>>>>>> befe34a (resolve conflicts)
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
<<<<<<< HEAD
=======
              channelId: -1,
>>>>>>> befe34a (resolve conflicts)
            };
          })
        );
      })
      .catch((error) => {
        console.log("Error: ", error);
        setIsOpen(true);
<<<<<<< HEAD
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

=======
        // <>
        //   <div
        //     style={BUTTON_WRAPPER_STYLES}
        //     onClick={() => console.log("clicked")}
        //   >
        //     <button onClick={() => setIsOpen(true)}>Open Modal</button>

        //     <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        //       Fancy Modal
        //     </Modal>
        //   </div>
        //   ˆ<div style={OTHER_CONTENT_STYLES}>Other Content</div>
        // </>;
      });
  }

  // fetch(
  //   `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=<search>`
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log("Error: ", error);
  //   });

  // function searchByKeyword() {
  //   const results = YouTube.Search.list("id,snippet", {
  //     q: search,
  //     maxResults: 5,
  //   });
  //   console.log(results);
  // }

  // searchByKeyword();

>>>>>>> befe34a (resolve conflicts)
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="search"
          name="search"
<<<<<<< HEAD
          value={search}
          onChange={handleChange}
          placeholder="cat videos"
        ></input>
        <label></label>
        <input id="submit" type="submit"></input>
      </form>
      {videos.length === 0 ? (
=======
          // value={search}
          onChange={handleChange}
          placeholder="cat videos"
        ></input>
        {/* <button onClick={() => handleSearch()}>Search</button> */}
        <label></label>
        <input id="submit" type="submit"></input>
      </form>
      {!search ? (
>>>>>>> befe34a (resolve conflicts)
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
<<<<<<< HEAD

=======
>>>>>>> befe34a (resolve conflicts)
          <div style={OTHER_CONTENT_STYLES}>Other Content</div>
        </div>
      ) : null}
    </div>
  );
}
