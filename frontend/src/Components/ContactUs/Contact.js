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
    <div class="contact__form container-fluid mb-2">
      <div class=" row justify-content-center mt-5">
        <div class=" col-xl-10">
          <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-sm-6 d-none d-sm-block bg-image"></div>
                <div class="col-sm-6 p-4">
                  <div class="text-center">
                    <div class="h3 fw-light mb-4">Contact Form</div>
                  </div>
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN" ref={form} onSubmit={sendEmail}>
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="name"
                        type="text"
                        placeholder="Name"
                        data-sb-validations="required"
                         name="from_name"
                      />
                      <label for="name">Name</label>
                      <div
                        class="invalid-feedback"
                        data-sb-feedback="name:required"
                      >
                        Name is required.
                      </div>
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="emailAddress"
                       
                        placeholder="Email Address"
                        data-sb-validations="required,email"
                        type="email" name="user_email"
                      />
                      <label for="emailAddress">Email Address</label>
                      <div
                        class="invalid-feedback"
                        data-sb-feedback="emailAddress:required"
                      >
                        Email Address is required.
                      </div>
                      <div
                        class="invalid-feedback"
                        data-sb-feedback="emailAddress:email"
                      >
                        Email Address Email is not valid.
                      </div>
                    </div>

                    <div class="form-floating mb-3">
                      <textarea
                        class="form-control"
                        id="message"
                        type="text"
                        placeholder="Message"
                        data-sb-validations="required"
                        name="message"
                      ></textarea>
                      <label for="message">Message</label>
                      <div
                        class="invalid-feedback"
                        data-sb-feedback="message:required"
                      >
                        Message is required.
                      </div>
                    </div>

                    <div class="d-none" id="submitSuccessMessage">
                      <div class="text-center mb-3">
                        <div class="fw-bolder">Form submission successful!</div>
                        <p>To activate this form, sign up at</p>
                        <a href="https://startbootstrap.com/solution/contact-forms">
                          https://startbootstrap.com/solution/contact-forms
                        </a>
                      </div>
                    </div>

                    <div class="d-none" id="submitErrorMessage">
                      <div className="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>

                    <div class="d-grid">
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
