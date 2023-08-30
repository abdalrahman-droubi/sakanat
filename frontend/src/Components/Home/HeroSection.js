import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Assets/images/hero-img0.jpg";
import slider2 from "../../Assets/images/hero-img1.jpg";
import slider3 from "../../Assets/images/hero-img2.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <Carousel controls={false} fade={true} pause={false}>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 1"
          className="d-block w-100"
          style={{ height: "calc(100vh - 68px) " }}
        />
        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
          <div className="text-center">
            <div className="  bg-opacity-50 bg-black">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                Save Nature with Us
              </h1>
              <p className="lead mb-12 text-white opacity-80">
                Nature is a vital source of life, providing us with clean air,
                fresh water, and healthy food. However, it is deteriorating and
                becoming polluted due to our unsustainable human activities.
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <Link to="/services">
                <button
                  className="btn btn-lg "
                  style={{
                    backgroundColor: "#F58635",
                  }}
                >
                  Donate a Tree
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 1"
          className="d-block w-100"
          style={{ height: "calc(100vh - 68px) " }}
        />
        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
          <div className="text-center">
            {/* <div className="  bg-opacity-50 bg-black"> */}
            <div className="  bg-opacity-50 bg-black">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                It's Time to Make a Better Impact
              </h1>
              <p className="lead mb-12 text-white opacity-80">
                Join our team to volunteer in tree planting and be part of the
                global movement to conserve the environment. There may be
                opportunities in parks, hospitals, schools, and other places.
                Take action now and submit your volunteer application for tree
                planting. Nature awaits your contribution.
              </p>
            </div>
            {/* </div> */}
            <div className="flex justify-center gap-2">
              <Link to="/signup">
                <button
                  className="btn btn-lg "
                  style={{
                    backgroundColor: "#F58635",
                  }}
                >
                  Volunteer Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://media.istockphoto.com/id/515188212/photo/shirts-on-a-hanger.jpg?s=612x612&w=0&k=20&c=705WmwDHFKK-60WqiyMEZOdRszjdzXYDOmIs4ekRcIM="
          alt="image 1"
          className="d-block w-100"
          style={{ height: "calc(100vh - 68px) " }}
        />
        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
          <div className="text-center">
            <div className="  bg-opacity-50 bg-black">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                We've Planted Over 1000 Trees!
              </h1>
              <p className="lead mb-12 text-white opacity-80">
                You will contribute to creating new forests, improving air
                quality, and providing habitats for diverse wildlife. These
                trees are not just plants; they are a source of life, oxygen,
                and spaces for recreation as well.
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <Link to="/signup">
                <button
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "#F58635",
                  }}
                >
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
