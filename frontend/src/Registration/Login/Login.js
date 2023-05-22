import "./login.css";
import React, { useState, useEffect } from "react";
import { Link, json, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
// import { gapi } from "gapi-script";
const client_id =
  "928488147008-b5nobd5nfm448iuodhlqg46tor6c7htm.apps.googleusercontent.com";

const Login = () => {
  // useEffect(() => {
  //   function start() {
  //     gapi.client
  //       .init({
  //         client_id: client_id,
  //         scope: "https://www.googleapis.com/auth/calendar",
  //       })
  //       .then(function () {
  //         console.log("Google API client initialized");
  //       });
  //   }
  //   gapi.load("client:auth2", start);
  // });

  const [userInputs, setUserInputs] = useState({
    userEmail: "",
    userPass: "",
  });

  const navigate = useNavigate();
  const savedUserInputs = JSON.parse(localStorage.getItem("userInputs"));
  const [IsFound, setIsFound] = useState(false);

  // check if email and password === to email and password in local storage
  function checkAccount(savedUserInputs) {
    if (
      userInputs.email === savedUserInputs.email &&
      userInputs.password === savedUserInputs.password
    ) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs);
    checkAccount(userInputs);
    IsFound ? navigate("/") : alert("email or password are inccorect");
  };

  const onChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const onSuccess = (res) => {
    console.log("Login success ! current user : ", res.profileObj);
    localStorage.setItem("userInputs", JSON.stringify(res.profileObj));
    navigate("/Home");
  };

  const onFailure = (res) => {
    console.log("Login Failed ! res: ", res);
  };
  return (
    <>
      <div className="half ">
        <div className="bg order-1 order-md-2 bgImage"></div>
        <div className="contents order-2 order-md-1">
          <div className="container mb-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className="form-block">
                  <div className="text-center mb-5">
                    <h3>
                      Login to <strong>SAKANAT</strong>
                    </h3>
                  </div>
                  <div className="text-center">
                    {/* <GoogleLogin
                      clientId={client_id}
                      buttonText="Login with google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                    /> */}
                  </div>

                  <form action="#" method="post" onSubmit={handleSubmit}>
                    <div className="input-container mt-5 mb-5">
                      <input
                        onChange={onChange}
                        value={userInputs.email}
                        name="userEmail"
                        type="email"
                        id="userEmail"
                        required
                        className="form-input"
                      />
                      <label htmlFor="userEmail" className="label">
                        Email
                      </label>
                      <div className="underline"></div>
                    </div>

                    <div className="input-container mt-5 mb-5">
                      <input
                        onChange={onChange}
                        value={userInputs.password}
                        type="password"
                        name="userPass"
                        id="userPass"
                        required
                        className="form-input"
                        autoComplete="on"
                      />
                      <label htmlFor="userPass" className="label">
                        Password
                      </label>
                      <div className="underline"></div>
                    </div>
                    <button className="uiverse-btn mt-5" type="submit">
                      <span className="hover-underline-animation">Login</span>
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
                    </button>

                    <div className="d-sm-flex mb-5 align-items-center">
                      <span className="ml-auto">
                        <p className="haveAccount">
                          Not a member ?{" "}
                          <Link to="/SignUp" className="haveAccountLink">
                            Signup now
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
};

export default Login;
