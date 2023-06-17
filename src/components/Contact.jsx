import React, { useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../assets/phone.json";
import emailjs from "@emailjs/browser";
import done from "../assets/Done.svg";
import "./Contact.css";

const SubmitButton = styled.input`
  cursor: pointer;
  margin-top: -20px;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  background-color: var(${(props) => props.color});
  color: black;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 18px;
  transition: all 0.3s;
`;

export const Contact = () => {
  const [submit, setSubmit] = useState("Submit");
  const [submitColor, setSubmitColor] = useState("--textWhite");
  const [name, setName] = useState("");
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

  function handleSubmit() {
    setSubmit("Sent ✓");
    setSubmitColor("--buttonBlue");
  }

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="wrapper">
      <form ref={form} onSubmit={sendEmail} class="form">
        <div className="pageTitle title">CONTACT ME </div>
        <div className="secondaryTitle title">
          Looking forward to hearing from you!
        </div>
        <div className="formInputs">
          <div className="formText">
            <input
              required="true"
              type="text"
              className="name formEntry"
              placeholder="Joe Doe"
              name="user_name"
              value={name}
              onChange={handleName}
            />
            {name === true ? <h1>Invalid Name</h1> : null}
            <input
              required="true"
              type="text"
              className="email formEntry"
              placeholder="email@address.com"
              name="user_email"
            />
          </div>
          <textarea
            required="true"
            type="textarea"
            className="message formEntry"
            placeholder="Your message here..."
            name="message"
          ></textarea>
        </div>
        <SubmitButton
          color={submitColor}
          className="submit formEntry"
          type="submit"
          value={submit}
        />
      </form>
      <div className="contactRight">
        <div className="animation">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
