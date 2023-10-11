"use client";
import React from "react";
import { useState } from "react";
import styles from "../styles/Contact.module.scss";
import emailjs from "emailjs-com";

export default function contact() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const serviceID = process.env.SERVICE_ID;
  const templateID = process.env.TEMPLATE_ID;
  const publicKey = process.env.PUBLIC_KEY;

  console.log(publicKey, templateID, serviceID);
  const mail = (data) => {
    emailjs
      .send(`${serviceID}`, `${templateID}`, data, `${publicKey}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submit = (event) => {
    event.preventDefault();
    const data = {
      from_name: `${firstName} ${lastName}`,
      message: message,
    };
    mail(data);
  };

  return (
    <>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.container}>
        <form onSubmit={submit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(event) => handleInputChange(event, setfirstName)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(event) => handleInputChange(event, setlastName)}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => handleInputChange(event, setEmail)}
          />
          <textarea
            rows={10}
            className={`${styles.input} ${styles.textarea}`}
            type="text"
            placeholder="Message"
            value={message}
            onChange={(event) => handleInputChange(event, setMessage)}
          />
          <input
            className={styles.send}
            type="submit"
            value="Envoyer le message ! "
          />
        </form>
      </div>
    </>
  );
}
