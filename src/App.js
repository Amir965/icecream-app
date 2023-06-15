import "./App.css";
import Home from "./components/Home";
import OurStory from "./components/OurStory";
import { Routes, Route } from "react-router-dom";
// import Check from "./components/Animated";
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        </Routes>
        </ParallaxProvider>
    </div>
  );
}

export default App;
