import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');
    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="section__container contact__container" id="contact">
      <h2 className="section__header">Contact Me</h2>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <div className="input__row">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" required />
        <input type="text" name="message" placeholder="Message" required style={{ minHeight: '100px' }} />
        <button className="btn" type="submit">Send Message</button>
        {status && <div style={{ marginTop: '1rem', color: status.includes('success') ? 'green' : 'red' }}>{status}</div>}
      </form>
    </section>
  );
}

export default Contact; 