import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Services_haleme.css";
import { UserDataContext } from "../../context/userDataContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginImageInDetails from "../../Assets/images/undraw_Login_re_4vu2.png";

function OrderForm({ isCompanyOpen, companyId, providerData }) {
  const navigate = useNavigate();
  const [formError, setformError] = useState(null);
  const { user, isLoggedIn } = useContext(UserDataContext);
  const [formData, setFormData] = useState({
    serviceType: "",
    email: "",
    dateTime: "",
    details: "",
    phoneNumber: "",
    location: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const phoneNumberRegex = /^07\d{8}$/;
    // if (
    //   formData.serviceType === "" ||
    //   formData.email === "" ||
    //   formData.dateTime === "" ||
    //   formData.details === "" ||
    //   formData.phoneNumber === "" ||
    //   formData.location === ""
    // ) {
    //   setformError("Please fill a required fields.");
    //   return;
    // } else if (!emailRegex.test(formData.email)) {
    //   setformError("Invalid email format.");
    //   return;
    // } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
    //   setformError("Invalid phone number format. Phone number should start with 07 and be 10 digits long.");
    //   return;
    // } else {
    //   setformError(null);
    // }
    console.log(formData);
    axios
      .post(
        `http://localhost:5500/api/createServicesRequest/${user._id}/${companyId}`,
        formData
      )
      .then((response) => {
        console.log(response);
        if (response.data.success === "New Request created!") {
            navigate("/userProfile")
        }
      })
      .catch((error) => {
        console.error("Error fetching provider data:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "serviceType") {
      const selectedService = JSON.parse(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedService,
      }));
    } else if (name === "dateTime") {
      const selectedDateTime = new Date(value).getTime();
      const currentTime = new Date().getTime();
  
      if (selectedDateTime < currentTime) {
        return;
      }
  
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  return (
    <>
      {" "}
      <div
        className="col-12 col-lg-4 col-md-3 main_form_services  "
        style={{ height: "fit-content" }}
      >
        {isLoggedIn ? (
          <form
            className="card ps-4 pe-4 pb-4"
            style={{ backgroundColor: "#00A3E0", height: "fit-content" }}
            onSubmit={handleSubmit}
          >
            <h4 className="d-flex justify-content-center mb-3 mt-2">
              Request a Service
            </h4>
            <Form.Group className="mb-3">
              <Form.Label>Type of services</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
              >
                <option>Choose your service ...</option>
                {providerData.services?.map((ele) => (
                  <option value={JSON.stringify(ele)}>{ele.name}</option>
                ))}
              </Form.Select>
              {formError && <p className="text-danger m-0">{formError}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formError && <p className="text-danger m-0">{formError}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pick date and time :</Form.Label>
              <Form.Control
                type="datetime-local"
                className="p-2 rounded"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleInputChange}
                min={new Date().toISOString().slice(0, 16)}
              />
              {formError && <p className="text-danger m-0">{formError}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              />
              {formError && <p className="text-danger m-0">{formError}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              {formError && <p className="text-danger m-0">{formError}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
              {formError && <p className="text-danger m-0">{formError}</p>}
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              // disabled={isCompanyOpen() === true ? false : true}
            >
              Request a Service
            </Button>
          </form>
        ) : (
          <div
            className="rounded border ps-4 pe-4 pb-4"
            style={{
              height: "fit-content",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            }}
          >
            <h4 className="d-flex justify-content-center mb-3 mt-3">
              Request a Service
            </h4>
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <p>Login to make a Request</p>
              <div className="rounded">
                <img src={loginImageInDetails} className="w-100 rounded mb-3" />
              </div>
              <Link to={"/Login"}>
                <Button
                  className="btn btn-warning"
                  style={{ backgroundColor: "#f58635" }}
                >
                  login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OrderForm;
