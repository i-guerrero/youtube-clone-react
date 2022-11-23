import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import YouTube from "react-youtube";
import Modal from '../Modal';

export default function Home() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }
  
  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    console.log(search);
    // searchByKeyword();
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${search}&maxResults=5`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        // console.log("Error: ", error);
        <>
        <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
  
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
          </Modal>
        </div>
  
        <div style={OTHER_CONTENT_STYLES}>Other Content</div>
      </>
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

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="search"
          name="search"
          // value={search}
          onChange={handleChange}
          placeholder="cat videos"
        ></input>
        {/* <button onClick={() => handleSearch()}>Search</button> */}
        <label></label>
        <input id="submit" type="submit"></input>
      </form>
      {!search ? (
        <p>No search results yet. Please submit a search above.</p>
      ) : null}
    </div>
  );
}
