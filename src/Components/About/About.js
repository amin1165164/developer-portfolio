import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./About.css";
import myPhoto from "../Images/IMG_20200116_164220-01-removebg-preview.png";
import hiImage from "../Images/waving-hand.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader text-center">About Me</h1>

          <div className="commonBorder"></div>
          {/* <p className="mainContent">{header.text}</p> */}
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-md-5 offset-md-1">
            <div className="about__img">
              <img className="img-fluid" src={myPhoto} alt="man" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="about__info">
              <h1>
                Hello
                <sup>
                  <img src={hiImage} alt="" className="wave-image" />
                </sup>{" "}
                There
              </h1>
              <div className="about__info-p1">
                My name is MUHAMMAD AMINUL ISLAM. I am a B.Sc (Hons) student of
                Jahangirnagar University in IT (Information Technology). <br />I
                want to be a good developer as well as a good human being too. I
                count myself as a hard-working person. SO, i always adhere to my
                dream and work for it. <br /> I have a big dream in my life,
                explore the world with a bike.
              </div>
              <div className="about__info-p2">
                <ul className="header__ul">
                  <a
                    href="https://www.linkedin.com/in/aminul1802/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="headerIcon" />
                  </a>
                  <a
                    href="https://github.com/amin1165164"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="headerIcon" />
                  </a>
                  <a
                    href="https://twitter.com/md_aminul1802"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="headerIcon" />
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSRMMXXXVjjjdqvZrstkpxbBnwcqGDxHQfnJRlnkmkblvXCXNSssRkNgjRfGGwCzHwNfr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail className="headerIcon" />
                  </a>
                  <a
                    href="https://www.facebook.com/aminul0218/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="headerIcon" />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
