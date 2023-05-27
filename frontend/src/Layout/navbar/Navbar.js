import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineOrderedList,
} from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navbar.css";
import logo from "../../Assets/images/main logo .png";

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [isActiveNavbar, setActiveNAvbar] = useState();
  const { pathname } = useLocation();

  function handleToggleSideMenu() {
    setShowSideMenu(!showSideMenu);
  }

  useEffect(() => {
    if (pathname == "/") {
      setActiveNAvbar(1);
    } else if (pathname == "/services") {
      setActiveNAvbar(2);
    } else if (pathname == "/aboutPage") {
      setActiveNAvbar(3);
    } else if (pathname == "/ContactUs") {
      setActiveNAvbar(4);
    } else {
      setActiveNAvbar(0);
    }
  }, [pathname]);

  function handleLogout() {
    localStorage.removeItem("user");
    // ctx.refresh();
  }

  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleSideMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <Link className="navbar-brand mt-2 mt-lg-0 me-5 logo-navbar" to="/">
          <img src={logo} className="w-100 h-100" />
        </Link>

        <div
          className={`collapse navbar-collapse ${
            showSideMenu ? "show" : ""
          } me-5`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0  navLink">
            <li className="nav-item p-2">
              <Link
                className={
                  isActiveNavbar == 1 ? "nav-link active-navbar" : "nav-link"
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                className={
                  isActiveNavbar == 2 ? "nav-link active-navbar" : "nav-link"
                }
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                className={
                  isActiveNavbar == 3 ? "nav-link active-navbar" : "nav-link"
                }
                to="/aboutPage"
              >
                About
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link
                className={
                  isActiveNavbar == 4 ? "nav-link active-navbar" : "nav-link"
                }
                to="/ContactUs"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className=" btn main-btn rounded-pill ms-lg-5"> */}
        {false ? (
          <>
            <button
              className="logoutBtn "
              onClick={() => {
                handleLogout();
              }}
            >
              Log out
            </button>
          </>
        ) : (
          <Link className="log__in" to="/Login">
            <div className=" btn main-btn rounded-pill ms-lg-5">Login</div>
          </Link>
        )}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
