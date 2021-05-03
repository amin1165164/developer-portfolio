import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import contactImage from "../Images/20943953.jpg";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3smhudg",
        "template_esawcz5",
        e.target,
        "user_BUK0OXeUOaajtVifhNMp2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    // <form id="contactMe" className="contact-form" onSubmit={sendEmail}>
    //   <input type="hidden" name="contact_number" />
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <div id="contactMe" className="contactMe">
      <h1 className="text-center">CONTACT ME</h1>
      <div className="commonBorder-form"></div>
      <div className="row">
        <div className="col-md-5 offset-md-1">
          <form onSubmit={sendEmail} className="contact-form mt-5">
            <div class="mb-3">
              <label for="Name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="Name"
                name="user_name"
                placeholder="Your name.."
              />
            </div>
            <div class="mb-3">
              <label for="Email" class="form-label">
                Password
              </label>
              <input
                type="email"
                class="form-control"
                id="Email"
                name="user_email"
                placeholder="Your email address..."
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="btn-resume">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-5">
          <img src={contactImage} className="img-fluid d-flex align-items-center" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
