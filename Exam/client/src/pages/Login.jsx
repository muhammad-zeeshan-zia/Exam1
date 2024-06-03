import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloggedIn, setIsloggedn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      if (data) {
        localStorage.setItem("email", email);
        setIsloggedn(true);
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
      }
    } catch (err) {
      console.log("error fetching data");
    }
  };

  return (
    <>
      <Navbar />
      <section className="full-screen background-image py-5">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="mt-5"></div>
              <div
                className="card shadow bg-body rounded border border-dark mt-2"
                style={{ borderRadius: "1rem" }}
              >
                <div className="row g-0 align-items-center">
                  <div className="col-md-2 col-lg-3 d-none d-md-block"></div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fa fa-cubes fa-2x me-3"></i>
                          <div className="d-flex justify-content-center align-content-center">
                            <span className="h1 fw-bold mb-0">LOGIN</span>
                          </div>
                        </div>
                        <h3
                          className="fw-normal mb-3 pb-3 justify-content-center align-content-center"
                          style={{ letterSpacing: "1px" }}
                        >
                          <b>
                            Full Stack Web Development{" "}
                            <span style={{ color: "#232F3E" }}>Exam</span>
                          </b>
                        </h3>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="form2Example17"
                            placeholder="Enter Email"
                            className="form-control form-control-lg border border-dark"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            placeholder="Enter Password"
                            className="form-control form-control-lg border border-dark"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="pt-1 mb-4 mt-2">
                          <div className="d-flex justify-content-center align-content-center">
                            <button
                              style={{
                                width: "166px",
                                height: "35px",
                                backgroundColor: "#232F3E",
                              }}
                              type="submit"
                              className="btn"
                            >
                              <h6 className="text-white fw-bold">LOGIN</h6>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
