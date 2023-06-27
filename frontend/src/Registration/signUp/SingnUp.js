import React, { useContext, useState } from "react";
import "../Login/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../context/userDataContext";

function SingnUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [isValidPass, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidConfirm, setIsConfirmValid] = useState(false);
  const [errorSingup, setErrorSingup] = useState(null);
  const navigate = useNavigate();
  const {userRefresh} = useContext(UserDataContext)

  function handleNameChange(event) {
    const { value } = event.target;
    setFullName(value);
  }

  // check email
  function handleEmailChange(event) {
    const { value } = event.target;
    setEmail(value);
    setEmailError(validateEmail(value));
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // check password
  function handlePassword(event) {
    const { value } = event.target;
    setPassword(value);
    setPasswordError(validatePassword(value));
  }
  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  }

  // check confirm password
  function handleConfirmPass(event) {
    const { value } = event.target;
    setConfirmPassword(value);
    setIsConfirmValid(value === password);
  }

  function handleSubmit(event) {
    if (isEmailValid && isValidPass && isValidConfirm) {
      event.preventDefault();
      const userInputs = {
        fullName: fullName,
        email: email,
        password: password,
        role: "user",
      };

      axios
        .post("http://localhost:5500/api/register", userInputs)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/");
          setErrorSingup(null);
          userRefresh()
        })
        .catch((error) => {
          console.log(error);
          setErrorSingup(error.response.data.error);
        });
    }
  }

  return (
    <>
      <div className="half ">
        <div className="bg order-1 order-md-2 bgImage"></div>
        <div className="contents order-2 order-md-1">
          <div className="container pt-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className="form-block">
                  <div className="text-center mb-5">
                    <h3>SIGN UP</h3>
                  </div>
                  <div className="text-center mb-3">
                    {/* <GoogleLogin
                      clientId={client_id}
                      buttonText="Sign up with google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                    /> */}
                  </div>
                  <form onSubmit={handleSubmit}>
                    {/* Your login form fields */}

                    <div className="input-container ">
                      <input
                        onChange={handleNameChange}
                        value={fullName}
                        name="fullName"
                        type="text"
                        id="fullName"
                        required
                        className="form-input"
                      />
                      <label htmlFor="fullName" className="label">
                        Name
                      </label>
                      <div className="underline"></div>
                    </div>

                    <div className="input-container mt-5 mb-1">
                      <input
                        onChange={handleEmailChange}
                        value={email}
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="form-input"
                      />
                      <label htmlFor="email" className="label">
                        Email
                      </label>
                      <div className="underline"></div>
                    </div>
                    <div>
                      {!isEmailValid && email !== "" && (
                        <p className="errorMessages">
                          Please enter a valid email address.
                        </p>
                      )}
                    </div>

                    <div className="input-container mt-5 mb-1">
                      <input
                        onChange={handlePassword}
                        value={password}
                        name="password"
                        type="password"
                        id="password"
                        required
                        className="form-input"
                        autoComplete="on"
                      />
                      <label htmlFor="password" className="label">
                        Password
                      </label>
                      <div className="underline"></div>
                    </div>
                    <div></div>
                    <div>
                      {!isValidPass && password !== "" && (
                        <p className="errorMessages">
                          Please enter a password that is at least 8 characters
                          long and contains at least one lowercase letter, one
                          uppercase letter, and one number.
                        </p>
                      )}
                    </div>
                    <div className="input-container mt-5 mb-1">
                      <input
                        onChange={handleConfirmPass}
                        value={confirmPassword}
                        name="userConfirmPass"
                        type="password"
                        id="userConfirmPass"
                        required
                        className="form-input"
                        autoComplete="on"
                      />
                      <label htmlFor="userConfirmPass" className="label">
                        Confirm Password
                      </label>

                      <div className="underline"></div>
                    </div>
                    <div>
                      {!isValidConfirm && confirmPassword !== "" && (
                        <p className="errorMessages">
                          The passwords do not match.
                        </p>
                      )}
                    </div>

                    <button className="uiverse-btn mt-5" type="submit">
                      <span className="hover-underline-animation">Sign up</span>
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
                          userinputs-name="Path 10"
                          id="Path_10"
                        ></path>
                      </svg>
                    </button>
                    {errorSingup && (
                      <div className="alert alert-danger m-auto mt-3" style={{width:"fit-content"}} role="alert">
                        <>{errorSingup}</>
                      </div>
                    )}
                    <div className="d-sm-flex align-items-center">
                      <span className="ml-auto">
                        <p className="haveAccount">
                          If you already have an account, just
                          <Link to="/Login" className="haveAccountLink">
                            login.
                          </Link>
                        </p>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingnUp;
