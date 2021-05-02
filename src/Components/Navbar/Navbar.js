import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/">
          MD AMINUL ISLAM
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
                to="header"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Header{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={5000}
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
                offset={0}
                duration={500}
              >
                Projects{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="project"
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
                to="project"
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
                to="project"
                spy={true}
                smooth={true}
                offset={0}
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
