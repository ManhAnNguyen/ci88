import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div id="body">
      <Navbar />
      <div className="content">
        <div className="content-left">
          <Sidebar />
          <Sidebar />
        </div>
        <div className="content-center">
          <Feed />
        </div>
        <div className="content-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;

//babel,swc
//jsx -> cu phap mo rong js
//
