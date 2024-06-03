import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home.css";

const Home = () => {
  return (
    <div style={{ overflowY: "scroll", height: "100vh" }}>
      <Navbar />
      <div style={{ position: "relative" }}>
        <img
          src="https://www.hdwallpapers.in/download/girl_face_digital_art_simple_cyan_blue_artwork_black_background_dark_theme_hd_dark_theme-HD.jpg"
          alt="home"
          style={{ width: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            width: "80%",
          }}
        >
          <h1 className="heading1">Home Page</h1>
          <p className="para1">
            The FSWD exam evaluates candidates on their proficiency in both
            front-end and back-end web development, covering HTML, CSS,
            JavaScript, server-side languages like Node.js or Python, and
            databases like MySQL or MongoDB. Candidates must demonstrate
            knowledge of web frameworks like React or Angular and
            problem-solving abilities. With a focus on practical application,
            the exam certifies individuals capable of creating scalable,
            feature-rich web solutions for modern digital environments.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
