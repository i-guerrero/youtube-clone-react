import "./App.css";
import NavBar from "./NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./List"; //localstoragelist//
import "./List.css";

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
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <List />
    </div>
  );
}

export default App;
