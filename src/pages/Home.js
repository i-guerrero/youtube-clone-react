
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import YouTube from "react-youtube";

export default function Home() {
  const [search, setSearch] = useState("");

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
        console.log("Error: ", error);
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