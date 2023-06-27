import axios from "axios";
import "./login.css";
import React, { useState ,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/userDataContext";

function Login() {
  const {userRefresh} = useContext(UserDataContext)
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const [errorSingup, setErrorSingup] = useState(null);

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5500/api/auth", userInputs)
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
                        onChange={handleChange}
                        value={userInputs.email}
                        name="email"
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
                        onChange={handleChange}
                        value={userInputs.password}
                        type="password"
                        name="password"
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
                    {errorSingup && (
                      <div
                        className="alert alert-danger m-auto mt-3"
                        style={{ width: "fit-content" }}
                        role="alert"
                      >
                        <>{errorSingup}</>
                      </div>
                    )}
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
                          Not a member?
                          <Link to="/SignUp" className="haveAccountLink">
                            SignUp Now
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

export default Login;
