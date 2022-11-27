// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Videos from "./pages/videos";
// import videos from "./pages/Home";
import VideoCard from "./Components/VideoCard";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home videos={videos} setVideos={setVideos} />}
            />
            <Route path="/about" element={<About />} />
            {/* <Route path="/videos" element={<Videos />} /> */}
            {/* <VideoCard key={video.id} video={video} /> */}
            <Route path="/videos/:id" element={<VideoCard videos={videos} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
