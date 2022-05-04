import React from "react";
import image_01 from "./assets/image_01.png";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwiperButtons from "./components/SwiperButtons";

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      <Header imageSrc={image_01} />
      <TinderCards />
      <SwiperButtons />
    </div>
  );
}

export default App;
