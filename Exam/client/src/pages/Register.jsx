import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setShow(status);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/register", {
        username,
        email,
        password,
        firstname,
        lastname,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  return (
    <>
      <Navbar />
      {!show ? (
        <section
          className="background-image"
          style={{ minHeight: "100vh", overflowY: "auto" }}
        >
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-xl-10">
                <div className="mt-5"></div>
                <div
                  className="card cascading-right border-dark"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <div className="card-body p-5 shadow-5 text-center">
                    <h2 className="fw-bold mb-5">REGISTER NOW</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4">
                            FirstName
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Firstname"
                            id="form3Example4"
                            className="form-control"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4">
                            LastName
                          </label>
                          <input
                            type="text"
                            placeholder="Enter LastName"
                            id="form3Example4"
                            className="form-control"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">
                          Username
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Username"
                          id="form3Example4"
                          className="form-control"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          id="form3Example4"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example5">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          id="form3Example5"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        style={{
                          width: "150px",
                          backgroundColor: "#232F3E",
                          height: "35px",
                          borderRadius: "14px",
                        }}
                        type="submit"
                        className="btn"
                      >
                        <span style={{ color: "white" }}>Register</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div
          style={{ fontSize: "100px", textAlign: "center", height: "500px" }}
        >
          Admin Login required
        </div>
      )}
    </>
  );
};

export default Register;
