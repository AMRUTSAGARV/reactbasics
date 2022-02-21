import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
     <Login />
     <SignUp />
    </div>
  );
}

export default App;
