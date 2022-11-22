import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

// fetch(
//   `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
