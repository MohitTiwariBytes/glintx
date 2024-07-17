import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div className="main-home-page">
      <div className="home-page">
        <Navbar></Navbar>
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
