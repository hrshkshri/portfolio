"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from './shared/Container';

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
        <div className='flex space-x-3 justify-between m-5'>
          <div className='text-neutral-300 flex flex-cols space-y-3'>
            <h1 className='text-4xl font-medium font-Work p-5 m-5 items-center m-2'>Get in Touch</h1>
            <h3 className="font-sans text-xl font-semibold m-1">I'd love to hear your ideas and thoughts!</h3>
            <div className='flex flex-col space-y-1 m-1 p-1'>
              <p>Alternatively you can email me at:</p><br />
              <span className="text-amber-500 font-bold">harshkeshari100@gmail.com</span>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-md px-5 py-5 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
            <form className="flex flex-col space-y-4 bg-neutral-900 rounded-md p-5 m-2" ref={form} onSubmit={sendEmail}>
              <label className="font-sans text-lg font-semibold text-neutral-300">Your Name</label>
              <input className="px-4 py-2 rounded-md bg-neutral-500 text-gray-900" type="text" name="user_name" />
              <label className="font-sans text-lg font-semibold text-neutral-300">Your Email</label>
              <input className="px-4 py-2 rounded-md bg-neutral-500 text-gray-900" type="email" name="user_email" />
              <label className="font-sans text-lg font-semibold text-neutral-300">Message</label>
              <textarea name="message" />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md" type="submit" onClick={setIsSubmitted(true)}>Send </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center p-5 m-3 text-6xl font-bold text-amber-300 drop-shadow-lg shadow-neutral-100 font-sans">
          Thank you for your message!
        </div>
      )}
    </Container>
  );
};

export default Contact
