import React, { useContext, useState } from "react";
import "./EditProfile.css";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { UserDataContext } from "../../context/userDataContext";

export const EditProfile = () => {
  const [errors, setErrors] = useState({});
  const { user, userRefresh } = useContext(UserDataContext);
  const [editUser, setEditUser] = useState({
    fullName: user.fullName,
    phoneNumber: user.phoneNumber,
    password: "",
    newPassword: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    // Perform validation checks
    if (!(editUser.password === "" && editUser.newPassword === "")) {
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
          editUser.password
        )
      ) {
        errors.password =
          "Please enter a password that is at least 8 characters long and contains at least one lowercase letter, one uppercase letter, and one number.";
      }
      if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
          editUser.newPassword
        )
      ) {
        errors.newPassword =
          "Please enter a password that is at least 8 characters long and contains at least one lowercase letter, one uppercase letter, and one number.";
      }
    }

    if (!editUser.phoneNumber) {
      errors.phoneNumber = "phone number is required";
    } else if (!/^07\d{8}$/.test(editUser.phoneNumber)) {
      errors.phoneNumber = "Must be like this 07xxxxxxxx";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      axios
        .put(`http://localhost:5500/api/updateUser/${user._id}`, editUser)
        .then((res) => {
          navigate("/userprofile");
          userRefresh();
          console.log(res);
        })
        .catch((error) => {
          console.log(error.response.data.error);
          errors.password = error.response.data.error
          setErrors(errors)
        });
    } else {
      setErrors(errors);
    }
  }

  return (
    <>
      <div className="container-xl px-4 mt-4">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/userprofile">My Profile</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Profile
            </li>
          </ol>
        </nav>

        <div className="row mt-5 justify-content-center">
          <div className="col-xl-9">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      defaultValue={editUser.fullName}
                      name="fullName"
                      onChange={handleChange}
                    />
                  </div>
                  {/* Form Group (phone number)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      name="phoneNumber"
                      onChange={handleChange}
                      type="tel"
                      placeholder="Enter your Phone Number"
                      defaultValue={editUser.phoneNumber}
                    />
                    {errors.phoneNumber && (
                      <span className="text-danger">{errors.phoneNumber}</span>
                    )}
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                      Current Password
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={editUser.password}
                      />
                      {errors.password && (
                        <span className="text-danger">{errors.password}</span>
                      )}
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                      New Password
                      </label>
                      <input
                        className="form-control"
                        onChange={handleChange}
                        name="newPassword"
                        id="inputLastName"
                        type="text"
                        value={editUser.newPassword}
                      />
                      {errors.newPassword && (
                        <span className="text-danger">
                          {errors.newPassword}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Save changes button*/}
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn "
                      style={{ backgroundColor: "#F58635" }}
                      type="submit"
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
