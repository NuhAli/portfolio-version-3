import React from "react";
import styles from "../../styles/ContactForm.module.scss"

const ContactForm = () => {
  return (
    <form action="" className={styles.FormComponent}>
      <label htmlFor="Name">Name</label>
      <input type="text" />
      <label htmlFor="email">E-mail</label>
      <input type="email" />
      <label htmlFor="message">Message</label>
      <textarea />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
