// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Videos from "./pages/videos";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<Videos />} />
            {/* <VideoCard key={video.id} video={video} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
