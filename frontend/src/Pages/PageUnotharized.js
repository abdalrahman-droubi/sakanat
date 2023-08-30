import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function PageUnauthorized() {
  return (
    <section
      className="bg-white"
      style={{ backgroundColor: "#ffffff", height: "100vh" }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 display-1 font-weight-bold text-primary">403</h1>
          <p className="mb-4 display-4 font-weight-bold text-dark">
            Unauthorized Access
          </p>
          <p className="mb-4 lead text-secondary">
            Sorry, you are not authorized to access this page. Please return to
            the home page.{" "}
          </p>
          <Link to="/">
            <Button variant="primary">Back to Home page</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageUnauthorized;
