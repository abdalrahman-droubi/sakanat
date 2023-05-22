import React from "react";
import "./About.css";
import {
  FaCarSide,
  FaHandHoldingUsd,
  FaMedal,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div>
        <section className="aboutt">
          <div className="container">
            <div className="row ">
              <div className="col-lg-4 col-md-2">
                <div className="about1"></div>
              </div>
              <div className="col-lg-8 col-md-4">
                <div className="services">
                  <h1 className="m-5">About Sakanat</h1>
                  <p className=" m-5 aboutText">
                    In Sakanat, we provide all the services that an expatriate
                    needs in his daily life by connecting people with great
                    local businesses.
                  </p>

                  <div class="cta">
                    <span class="hover-underline-animation">Our value</span>
                    <svg
                      viewBox="0 0 46 16"
                      height="10"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      id="arrow-horizontal"
                    >
                      <path
                        transform="translate(30)"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        data-name="Path 10"
                        id="Path_10"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="container mx-auto mt-5">
                  <div className="row icon0 text-center">
                    <div className="col-sm-4 col-6 ">
                      <div className="mt-5 ">
                        <FaMedal className=" ourValueIcon" />
                        <p className="ourValues">Quality Product</p>
                      </div>
                    </div>

                    <div className="col-sm-4 col-6">
                      <div className="mt-5">
                        <FaHandHoldingUsd className=" ourValueIcon" />
                        <p className="ourValues">100% Cash Back</p>
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="mt-5">
                        <FaCarSide className=" ourValueIcon" />
                        <p className="ourValues"> Free Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ourWorksSection">
          <div className="container">
            <div className="row">
              <h2 className="ourWorkHeader">Our Works</h2>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-2 "></div>
              <div className="col-lg-12 col-md-8 ">
                <p className="ourWorkP">
                  This platform provides expats with a range of services to help
                  them settle into a new country or city. Users can browse
                  through a database of available housing options, including
                  apartments, condos, and houses, and book their directly
                  through the platform. The platform also offers a convenient
                  dry cleaning service, allowing users to schedule pickups and
                  deliveries and have their clothes cleaned without leaving
                  their home. Additionally, the platform offers a food ordering
                  service, enabling users to order meals from local restaurants
                  and have them delivered directly to their door. This platform
                  aims to make the process of settling into a new country or
                  city as seamless and convenient as possible for expats.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*-------------------------------- contact section  ----------------------*/}
      <section className="contact" id="contact">
        <h2>We are here for you</h2>
        <h5>We'd love to hear from you</h5>
        <div>
          <a href="mailto:abdalrahman.drobi@gmail.com">
            <span>
              <MdEmail className="iconAbout" />
            </span>
            Email
            <br />
            info@form.com
          </a>
          <a href="tel:+962786313219">
            <span>
              <BsFillTelephoneFill className="iconAbout" />
            </span>
            Phone Number
            <br />
            601-199-0349
          </a>
          <a href="https://goo.gl/maps/AtC7qDfaEjeDPf7i9" target="_blank">
            <span>
              <MdLocationOn className="iconAbout" />
            </span>
            Address
            <br />
            053 Braulio Field
          </a>
          <a href="">
            <span>
              <FaTwitter className="iconAbout" />
            </span>
            Twitter
            <br />
            @user_name
          </a>
          <a href="">
            <span>
              <FaFacebookSquare className="iconAbout" />
            </span>
            Facebook
            <br />
            @user_name
          </a>
        </div>
      </section>
      {/*-------------------------------- contact section  ----------------------*/}
    </>
  );
};
export default About;
