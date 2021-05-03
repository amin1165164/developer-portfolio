import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../Images/image-removebg-preview.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container-fluid container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            className="img-fluid"
            src={logo}
            alt=""
            style={{ height: "4.375rem" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                About{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="blogs"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Blogs{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Resume{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contactMe"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
