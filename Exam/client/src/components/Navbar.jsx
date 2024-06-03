import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isResp, setIsResp] = useState(false);
  return (
    <nav className="navbar z-30">
      <h3 className="logo" style={{ fontSize: "38px" }}>
        FSWD
      </h3>
      <ul
        className={isResp ? "nav-links-resp" : "nav-links"}
        onClick={() => setIsResp(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>

        <Link to="#" className="about">
          <li>About</li>
        </Link>

        <Link to="#" className="contact">
          <li>Contact US</li>
        </Link>

      </ul>

      <button className="res-menu-icon" onClick={() => setIsResp(!isResp)}>
        {isResp ? <h1>X</h1> : <h1>=</h1>}
      </button>
    </nav>
  );
};
export default Navbar;
