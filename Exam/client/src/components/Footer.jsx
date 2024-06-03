import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start foter"
      style={{
        backgroundColor: "#232F3E",
        position: "relative",
        bottom: "0",
        width: "100%",
      }}
    >
      <section className="d-flex justify-content-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{ color: "white" }}>
            Get connected with us on social networks:
          </span>
        </div>
        <div>
          <a href="#" className="me-4 link-secondary">
            <i className="oi oi-audio"></i>
          </a>
        </div>
      </section>

      <section className="container-fluid mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-left">
            <h6 className="text-uppercase fw-bold mb-4">
              Full Stack Web Development Exam
            </h6>
            <p>
              Date: 03/06/2024
              <br />
              Time: 05:30 to 8:30 PM
              <br />
              Duration: 3 Hours.
              <br />
              Topics Covered: React JS, Node JS, MongoDB, Express JS, HTML, CSS.
            </p>
          </div>

          <div className="col-md-2"></div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Services</h6>
            <p>
              <a href="#!" className="text-reset">
                Exam Solutions
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Exam Management
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Exam Verification
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Exam Security
              </a>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
            <p>
              <a href="#!" className="text-reset">
                Vs code
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                MondoDB
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Twailwind
              </a>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3 text-secondary"></i> Islamabad, E8
              04408, Pakistan
            </p>
            <p>
              <i className="fas fa-envelope me-3 text-secondary"></i>{" "}
              support@FSWDEXAM.com
            </p>
            <p>
              <i className="fas fa-phone me-3 text-secondary"></i> +92
              xxxxxxxxxx
            </p>
            <p>
              <i className="fas fa-print me-3 text-secondary"></i> +92
              xxxxxxxxxx
            </p>
          </div>
        </div>
      </section>

      <div
        className="text-white p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        © 2024 Copyright:
        <a className="text-white fw-bold" href="#">
          FSWDLABEXAM.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
