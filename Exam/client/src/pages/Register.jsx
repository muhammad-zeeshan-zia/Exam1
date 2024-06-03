import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Form = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/register", {
        email,
        name,
        message,
        age,
        regNo,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <Navbar />
     
        <section
          className="background-image"
          style={{ minHeight: "90vh", overflowY: "auto" }}
        >
          <div className="w-[90%]">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-xl-10">
              
                <div
                  className="card cascading-right border-dark"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <div className="card-body  shadow-5 text-center">
                    <h2 className="fw-bold  text-3xl">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                     
                        <div className="form-outline mb-4">
                          <label className="float-start form-label" htmlFor="form3Example4">
                            Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            id="form3Example4"
                            className="form-control"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        
                        <div className="form-outline mb-4">
                          <label className="float-start form-label" htmlFor="form3Example4">
                            Age
                          </label>
                          <input
                            type="number"
                            min={1}
                            placeholder="Enter your Age"
                            id="form3Example4"
                            className="form-control"
                            value={age}
                            required
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label float-start " htmlFor="form3Example4">
                            email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter LastName"
                            id="form3Example4"
                            className="form-control"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      
                      <div className="form-outline mb-4">
                        <label className="form-label float-start " htmlFor="form3Example4">
                          Reg-No
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Registration No"
                          id="form3Example4"
                          className="form-control"
                          value={regNo}
                          required
                          onChange={(e) => setRegNo(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label float-start" htmlFor="form3Example4">
                          Message
                        </label>
                        <textarea
                          type="text"
                          placeholder="Enter Your Message"
                          id="form3Example4"
                          className="form-control"
                          value={message}
                          required
                          onChange={(e) => setMessage(e.target.value)}
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
                        <span style={{ color: "white" }}>Submit</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </>
  );
};

export default Form;
