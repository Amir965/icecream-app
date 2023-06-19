import "./App.css";
import Home from "./components/Home";
import OurStory from "./components/OurStory";
import { Routes, Route } from "react-router-dom";
// import Check from "./components/Animated";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        </Routes>
    </div>
  );
}

export default App;
