import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="info">
          <h1>I AM AMINUL ISLAM</h1>
          <h1>
            <Typed
              className="typed-text"
              strings={[
                " Web Developer",
                " Frontend Developer",
                " Web Designer",
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </h1>
          <a
            href="https://drive.google.com/uc?export=download&id=1QvXiJ1Uz0mUa0NqVqSICSifOBM2tst5P"
            className="btn-resume"
            role="button"
          >
            {" "}
            <FontAwesomeIcon icon={faDownload}/> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
