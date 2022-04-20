// import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UserFooter from "./components/UserFooter/UserFooter";

import BookData from "./components/Data.json";
import PrimarySearchAppBar from "./components/PrimarySearch/PrimarySearch";
import SwipeableTextMobileStepper from "./components/Swipable/Swipable";
// import TailMuiNavbar from "./components/TailMuiNavbar/TailMuiNavbar";
import MuiStarRating from "./components/MuiStarRating/MuiStarRating";
import BasicRating from "./components/MuiStarRating/MuiStarRating";
import BasicTable from "./components/SearchFilter/SearchFilter";
import BootstrapStar from "./components/BootstrapStar/BootstrapStar";
import BootstrapModal from "./components/BootstrapModal/BootstrapModal";
import AdminDashboard from "./components/Admin/AdminDashboard";
// import WstarRating from "./components/WstarRating/WstarRating";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <AdminDashboard />
      {/* <BasicTable /> */}
      <BasicRating />
      {/* <TailMuiNavbar /> */}
      {/* <SearchBar placeholder="Search By Your Institution " data={BookData} /> */}
      {/* <SearchBar placeholder="Search By Your Location" data={BookData} /> */}
      {/* <SwipeableTextMobileStepper /> */}
      {/* <BootstrapStar /> */}
      {/* <BootstrapModal /> */}

      <UserFooter />
    </div>
  );
}

export default App;
