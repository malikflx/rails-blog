import React from 'react';
import Mailto from "~/components/Buttons/Mailto.jsx";
import ContactForm from "~/components/Contact/ContactForm.jsx";
import './Contact.css';
import SecondaryButton from "~/components/Buttons/SecondaryButton.jsx";
import Socials from "~/components/Socials/Socials.jsx";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <h2 className="contact-title">Let&apos;s Connect</h2>
          <p>
            Get in touch with me in a way that works best for you! If
            you&apos;re looking for a speedy response, feel free to drop me a
            quick message using the form below. Alternatively, if you prefer a
            more personalized touch, email me directly at{' '}
            <span className="email-address">
              <Mailto
                className="email-link"
                label="malikfelix50@gmail.com"
                mailto="mailto:malikfelix50@gmail.com"
              />
            </span>
            . Looking forward to hearing from you!
          </p>
          <div className="contact-info">
            <div className="contact-cta">
              <Link to="https://calendly.com/malikfelix50">
                <SecondaryButton className="cta-contact-button">
                  Schedule a call
                </SecondaryButton>
              </Link>
            </div>
            <Socials />
          </div>
        </div>
        <div className="dynamic-contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
