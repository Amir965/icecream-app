import "./App.css";
// import Check from "./components/Check";
import Home from "./components/Home";
import OurStory from "./components/OurStory";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
      {/* <Check/> */}
    </div>
  );
}

export default App;
