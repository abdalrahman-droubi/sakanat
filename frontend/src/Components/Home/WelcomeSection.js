import { Link } from "react-router-dom";
import "./WelcomeSection.css";
import { BsArrowRightShort } from "react-icons/bs";
import imgSec from "../../Assets/images/about-us-img.jpg";
function WelcomeSection() {
  return (
    <>
      <div className="container-xxl pb-5 welcomSection">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="https://images.pexels.com/photos/4153155/pexels-photo-4153155.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start pe-3">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span style={{ color: "#F58635" }}> SAKANAT </span>
              </h1>
              <p className="mb-4">
                "Welcome to our expat-centric platform, offering specialized
                services for expatriates worldwide. From meticulous dry cleaning
                that pampers your wardrobe to comprehensive general maintenance,
                we simplify life abroad. Our dedicated team ensures your
                convenience and comfort, addressing everyday challenges.
                Seamlessly managing your needs, we make your expat journey
                smoother and more enjoyable."
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <span style={{ color: "#F58635" }}>
                      <BsArrowRightShort className="arrowIconWelcom" />
                    </span>
                    Tailored Dry Cleaning{" "}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <span style={{ color: "#F58635" }}>
                      <BsArrowRightShort className="arrowIconWelcom" />
                    </span>{" "}
                    Comprehensive Maintenance{" "}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <span style={{ color: "#F58635" }}>
                      <BsArrowRightShort className="arrowIconWelcom" />
                    </span>{" "}
                    Expat-Centric Services{" "}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <span style={{ color: "#F58635" }}>
                      <BsArrowRightShort className="arrowIconWelcom" />
                    </span>{" "}
                    Convenient Booking{" "}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <span style={{ color: "#F58635" }}>
                      <BsArrowRightShort className="arrowIconWelcom" />
                    </span>{" "}
                    Cultural Workshops{" "}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0 ">
                    <span style={{ color: "#F58635" }}>
                      <BsArrowRightShort className="arrowIconWelcom" />
                    </span>{" "}
                    Language Assistance{" "}
                  </p>
                </div>
              </div>
              <Link
                className="btn  py-3 px-5 mt-2"
                style={{ backgroundColor: "#F58635" }}
                to="aboutPage"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
}

export default WelcomeSection;
