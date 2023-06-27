import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/userDataContext";

export const ProfileDropdown = () => {
  const { userRefresh } = useContext(UserDataContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    userRefresh()
    navigate("/");
  };
  return (
    <>
      {/* Avatar */}
      <div className=" nav-item dropdown">
        <a
          className="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="rounded-circle">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="rounded-circle"
              height={31}
              width={34}
              alt="your profile page"
              loading="lazy"
            />
          </div>
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <Link className="dropdown-item" to="/userProfile">
              My profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/editprofile">
              Edit profile
            </Link>
          </li>
          <li className="logout">
            <Link className="dropdown-item" to={'/'} onClick={handleLogOut}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
