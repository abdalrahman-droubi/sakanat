import React from "react";
import { motion } from "framer-motion";
import "./contact.css";
import  { useRef } from 'react';
// import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    // emailjs.sendForm('service_w486woi', 'template_wqlf8vs', form.current, 'FclbcymguVw3zh1fbz`z ')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
  return (
    <div className="contact__form container-fluid">
      <div className=" row justify-content-center mt-5">
        <div className=" col-xl-10">
          <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-sm-6 d-none d-sm-block bg-image"></div>
                <div className="col-sm-6 p-4">
                  <div className="text-center">
                    <div className="h3 fw-light mb-4">Contact Form</div>
                  </div>
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN" ref={form} onSubmit={sendEmail}>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Name"
                        data-sb-validations="required"
                         name="from_name"
                      />
                      <label htmlFor="name">Name</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="name:required"
                      >
                        Name is required.
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="emailAddress"
                       
                        placeholder="Email Address"
                        data-sb-validations="required,email"
                        type="email" name="user_email"
                      />
                      <label htmlFor="emailAddress">Email Address</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="emailAddress:required"
                      >
                        Email Address is required.
                      </div>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="emailAddress:email"
                      >
                        Email Address Email is not valid.
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        type="text"
                        placeholder="Message"
                        data-sb-validations="required"
                        name="message"
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="message:required"
                      >
                        Message is required.
                      </div>
                    </div>

                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        <p>To activate this form, sign up at</p>
                        <a href="https://startbootstrap.com/solution/contact-forms">
                          https://startbootstrap.com/solution/contact-forms
                        </a>
                      </div>
                    </div>

                    <div className="d-none" id="submitErrorMessage">
                      <div className="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>

                    <div className="d-grid">
                      <motion.button
                        whileHover={{ scale: 0.97 }}
                        className="btn submit-b btn-lg "
                        id="submitButton"
                        type="submit"
                         value="Submit"
                      >
                        Submit
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
