"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from './shared/Container';

const SuccessMessage = () => {
  return (
    <div className="text-white">
      Thank you for your message!
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tddh4it', 'template_fveb06v', form.current, 'zEQQStgESz901eTav')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container activeRoute={"contact"}>
      {!isSubmitted ? (
        <form className="flex flex-col space-y-4" ref={form} onSubmit={sendEmail}>
          <label className="text-white">Your Name</label>
          <input className="px-4 py-2 rounded-md bg-gray-100 text-gray-900" type="text" name="user_name" />
          <label className="text-white">Your Email</label>
          <input className="px-4 py-2 rounded-md bg-gray-100 text-gray-900" type="email" name="user_email" />
          <label className="text-white">Message</label>
          <textarea name="message" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" type="submit" onClick={setIsSubmitted(true)}>Send </button>
        </form>
      ) : (
        <SuccessMessage />
      )}
    </Container>
  );
};

export default Contact
