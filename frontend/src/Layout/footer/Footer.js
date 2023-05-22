import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Footer.css";
import {
  AiOutlineCopyrightCircle,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="card bg-white p-5">
          <div className="row mb-4">
            <div className="col-lg-4 col-sm-4 col-xs-4">
              <div className="footer-text footerUl">
                <div className="d-flex">
                  <h1 className="font-weight-bold mr-2 px-3"> SAKANAT </h1>
                </div>
                <p className="card-text">
                  This platform provides expats with a range of services to help
                  them settle into a new country or city. Users can browse
                  through a database of available housing options, including
                  apartments, condos, and houses, and book their directly
                  through the platform.
                </p>
                <div className="social mt-2 mb-3 ">
                  <a href="" className="m-1">
                    <AiOutlineInstagram />
                  </a>
                  <a href="" className="m-1">
                    <AiOutlineFacebook />
                  </a>
                  <a href="" className="m-1">
                    {" "}
                    <AiFillTwitterCircle />
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>

            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="headingText">Services</h6>
              <ul className="card-text footerUl m-0 p-0">
                <li>IT Consulting</li>
                <li>Development</li>
                <li>Cloud</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="headingText">Industries</h6>
              <ul className="card-text footerUl m-0 p-0">
                <li>Finance</li>
                <li>Public Sector</li>
                <li>Smart Office</li>
                <li>Retail</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="heading">Company</h6>
              <ul className="card-text footerUl m-0 p-0">
                {" "}
                <Link to="/aboutus" className="footerLink">
                  {" "}
                  <li> About Us</li>
                </Link>
                <li>Blog</li>
                <Link to="/contactus" className="footerLink">
                  {" "}
                  <li> Contact</li>
                </Link>
                <li>Join Us</li>
              </ul>
            </div>
          </div>
          <div className="divider mb-2"> </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-left">
                <p>
                  <AiOutlineCopyrightCircle /> 2023 Cozy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
