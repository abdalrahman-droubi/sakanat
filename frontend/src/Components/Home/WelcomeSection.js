import { Link } from "react-router-dom";
import './WelcomeSection.css'
import { BsArrowRightShort } from "react-icons/bs";
import imgSec from '../../Assets/images/about-us-img.jpg'
function WelcomeSection() {
  return (
    <>
      {/* About Start */}
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
                  src={imgSec}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start pe-3">
                About Us
              </h6>
              <h1 className="mb-4">Welcome to SAKANAT</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <BsArrowRightShort className="arrowIconWelcom" />
                    Skilled Instructors
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <BsArrowRightShort className="arrowIconWelcom" />
                    Online Classes
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <BsArrowRightShort className="arrowIconWelcom" />
                    International Certificate
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <BsArrowRightShort className="arrowIconWelcom" />
                    Skilled Instructors
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <BsArrowRightShort className="arrowIconWelcom" />
                    Online Classes
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <BsArrowRightShort className="arrowIconWelcom" />
                    International Certificate
                  </p>
                </div>
              </div>
              <Link className="btn btn-primary py-3 px-5 mt-2" to="aboutPage">
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
