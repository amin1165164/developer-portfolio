import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./About.css";
import myPhoto from "../Images/IMG_20200116_164220-01-removebg-preview.png";

const About = () => {
  //   const [header] = React.useState({
  //     subHeader: "About Me",
  //     text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  //   });
  //   const [state] = React.useState([
  //     { id: 1, title: "Name:", text: "Jonathan Doe" },
  //     { id: 2, title: "Email:", text: "example@domain.com" },
  //     { id: 3, title: "Phone:", text: "+1 023 454 345" },
  //     { id: 4, title: "Linkedin", text: "Jonathan_123" },
  //   ]);
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
              <h1>Hello There</h1>
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
                  <a href="https://www.linkedin.com/in/aminul1802/" target="_blank">
                    <FaLinkedin className="headerIcon" />
                  </a>
                  <a href="https://github.com/amin1165164" target="_blank">
                    <FaGithub className="headerIcon" />
                  </a>
                  <a href="https://twitter.com/md_aminul1802" target="_blank">
                    <FaTwitter className="headerIcon" />
                  </a>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSRMMXXXVjjjdqvZrstkpxbBnwcqGDxHQfnJRlnkmkblvXCXNSssRkNgjRfGGwCzHwNfr" target="_blank">
                    <FiMail className="headerIcon" />
                  </a>
                  <a href="https://www.facebook.com/aminul0218/" target="_blank">
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
