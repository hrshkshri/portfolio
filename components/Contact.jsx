"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from './shared/Container';

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLATE_ID = process.env.TEMPLATE_ID;
    const PUBLIC_KEY = process.env.PUBLIC_KEY;
    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container activeRoute={"contact"}>
      {!isSubmitted ? (
        <div className='flex justify-between m-5'>
          <div className='text-neutral-300 flex flex-col space-y-3'>
            <h1 className='text-4xl font-bold font-Work py-5'>Get in Touch</h1>
            <h3 className="font-sans text-xl font-semibold">I'd love to hear your ideas and thoughts!</h3>
            <div className='flex flex-col space-y-1'>
              <p>Alternatively you can email me at:</p><br />
              <span className="text-amber-500 font-bold">harshkeshari100@gmail.com</span>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-md px-5 py-5 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
            <form className="flex flex-col space-y-4 bg-neutral-900 rounded-md p-5 m-2" ref={form} onSubmit={sendEmail}>
              <label className="font-sans text-lg font-semibold text-neutral-300">Your Name</label>
              <input className="px-4 py-2 rounded-md bg-neutral-500 text-gray-100" type="text" name="user_name" placeholder="Enter your name" />
              <label className="font-sans text-lg font-semibold text-neutral-300">Your Email</label>
              <input className="px-4 py-2 rounded-md bg-neutral-500 text-gray-100" type="email" name="user_email" placeholder="Enter your email" />
              <label className="font-sans text-lg font-semibold text-neutral-300">Message</label>
              <textarea className="px-4 py-2 rounded-md bg-neutral-500 text-gray-100" name="message" placeholder="Enter your message" />
              <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-md" type="submit" onClick={() => setIsSubmitted(true)}>Send</button>
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
