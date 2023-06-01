import React, { useRef, useState } from "react";
import styled from "styled-components";
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

    // emailjs
    //   .sendForm(
    //     "service_s3i9os8",
    //     "template_ytgwkwk",
    //     form.current,
    //     "RNv-6JJbXZ0C4svlc"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
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
          Please fill this form to contact me.
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
            className="message formEntry"
            placeholder="Your message here..."
            name="message"
          ></textarea>
        </div>
        {submit === "Sent ✓" ? (
          <h1 className="submitText">Thank you for your message!</h1>
        ) : null}
        <SubmitButton
          color={submitColor}
          className="submit formEntry"
          type="submit"
          value={submit}
          onClick={handleSubmit}
        />
      </form>
      <div className="contactRight">
        <div className="contactItems">
          <h1 className="contactRightText">
            It was a pleasure having you here!
          </h1>
        </div>
        <div className="contactItems">
          <div className="firstBox"></div>
          <h1 className="contactRightText">Thank you for viewing</h1>
        </div>
        <div className="contactItems">
          <h1 className="contactRightText">my portfolio.</h1>
          <div className="secondBox"></div>
        </div>
        <div className="contactItems">
          <div className="thirdBox"></div>
          <h1 className="contactRightText">You can contact me using</h1>
        </div>
        <div className="contactItems">
          <h1 className="contactRightText">the form on the left.</h1>
          <div className="fourthBox"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
