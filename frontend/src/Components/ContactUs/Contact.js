import React from "react";
import { motion } from "framer-motion";
import "./contact.css";
import { useRef } from "react";
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
    <>
      <div className="contact111 bg-background" />
      <div className="contact111 container pb-5 mb-5">
        <div className="contact111 row py-5 g-3">
          <div className="col-md-6 first_col ">
            <h1 className="text-center mt-3">Contact Us</h1>
            <form className="p-4 mt-5">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Enter your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Enter your massage
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary">Send Now</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 sec_col">
            <img
              src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="contact111 row-last">
          <div className="row row-cols-1 row-cols-md-3  p-3 text-white">
            <div className="col">
              <h4>CALL US</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, doloribus!
              </p>
            </div>
            <div className="col">
              <h4>LOCATION</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, doloribus!
              </p>
            </div>
            <div className="col">
              <h4>Email</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, doloribus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;