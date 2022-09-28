import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/ContactForm.module.scss";
import { IFormData } from "../../types/formData";
import sendForm from "./sendForm";

const ContactForm = () => {
  const { register, handleSubmit,formState:{errors} } = useForm<IFormData>();

  const submit = (data: IFormData) => {
    sendForm.submitForm(data)
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={styles.FormComponent}
    >
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        {...register("fullName", { required: "Please enter your full name." })}
        placeholder={"Full Name"}
      />
      <p>{errors.fullName?.message}</p>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        {...register("emailAddress", { required: "Please enter your email address." })}
        placeholder={"Your Email Address"}
      />
      <p>{errors.emailAddress?.message}</p>
      <label htmlFor="message">Message</label>
      <textarea
        {...register("message", { required: "Please enter your message and make sure its above 20 characters.", minLength: 20 })}
        placeholder={"Please enter your message here..."}
      ></textarea>
      <p>{errors.message?.message}</p>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
