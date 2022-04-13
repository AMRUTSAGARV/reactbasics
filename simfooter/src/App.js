// import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UserFooter from "./components/UserFooter/UserFooter";

import BookData from "./components/Data.json";
import PrimarySearchAppBar from "./components/PrimarySearch/PrimarySearch";
import SwipeableTextMobileStepper from "./components/Swipable/Swipable";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <SearchBar placeholder="Enter a Book Name... " data={BookData} />
      <SwipeableTextMobileStepper />
      <UserFooter />
    </div>
  );
}

export default App;
