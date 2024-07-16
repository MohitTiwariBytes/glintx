import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/GlintXLogo.png";
import "./Navbar.css";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline.to(".menu", {
      duration: 0.5,
      y: "0",
    });
    timeline.fromTo(
      ".menu-item a",
      {
        top: "1700px",
      },
      {
        top: "0px",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
      }
    );

    if (isOpen) {
      timeline.play();
    } else {
      gsap.set(".menu", { y: "-100%" });
      timeline.reverse();
    }
  }, [isOpen]);

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
      <div className="menu">
        <div className="menu-items">
          <div className="menu-item">
            <a ref={textRef1} href="#">
              Home
            </a>
          </div>
          <div className="menu-item">
            <a ref={textRef2} href="#">
              About
            </a>
          </div>
          <div className="menu-item">
            <a ref={textRef3} href="#">
              Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
