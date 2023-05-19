import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s3i9os8",
        "template_ytgwkwk",
        form.current,
        "RNv-6JJbXZ0C4svlc"
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
  };

  return (
    <div className="wrapper">
      <form ref={form} onSubmit={sendEmail} class="form">
        <div className="pageTitle title">Contact Me </div>
        <div className="secondaryTitle title">
          Please fill this form to contact me.
        </div>
        <input
          type="text"
          className="name formEntry"
          placeholder="Joe Doe"
          name="user_name"
        />
        <input
          type="text"
          className="email formEntry"
          placeholder="email@address.com"
          name="user_email"
        />
        <textarea
          className="message formEntry"
          placeholder="Your message here..."
          name="message"
        ></textarea>
        <input className="submit formEntry" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
