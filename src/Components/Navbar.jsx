import React from "react";
import Logo from "../assets/GlintXLogo.png";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="main-navbar">
      <div className="navbar-main">
        <div className="navbar">
          <div className="logo">
            <img style={{ height: "63px" }} src={Logo} alt="" />
          </div>
        </div>
      </div>

      <div className="hamButton">
        <div onClick={handleClick} className="hamButtonMain">
          <div className="lines">
            <div className={isOpen ? "line1 active" : "line1"}></div>{" "}
            <div className={isOpen ? "line2 active" : "line2"}></div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: isOpen ? "100%" : "0",
          marginTop: isOpen ? "0" : "-1000px",
        }}
        className="menu"
      >
        <div className="menu-items">
          <div className="menu-item">
            <a href="#">Home</a>
          </div>
          <div className="menu-item">
            <a href="#">About</a>
          </div>
          <div className="menu-item">
            <a href="#">Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
