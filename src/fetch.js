fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    //   addToHistory();
  })
  .catch((error) => {
    console.log("Error: ", error);
  });



