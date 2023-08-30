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
            <div className="  bg-opacity-50 bg-black m-5">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                Simplifying life abroad, one service at a time.
              </h1>
              <p className="lead mb-12 text-white opacity-80">
                Dependable upkeep and maintenance solutions to ensure your expat
                journey is worry-free.
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <Link to="/Providers">
                <button
                  className="btn btn-lg "
                  style={{
                    backgroundColor: "#F58635",
                  }}
                >
                  See More <i class="fa-solid fa-arrow-right"></i>
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
            <div className="  bg-opacity-50 bg-black m-5">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                Reliable general maintenance solutions.
              </h1>
              <p className="lead mb-12 text-white opacity-80">
                Trustworthy solutions for all your general maintenance needs,
                ensuring a worry-free expat experience.
              </p>
            </div>
            {/* </div> */}
            <div className="flex justify-center gap-2">
              <Link to="/Providers">
                <button
                  className="btn btn-lg "
                  style={{
                    backgroundColor: "#F58635",
                  }}
                >
                  See More <i class="fa-solid fa-arrow-right"></i>
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
            <div className="  bg-opacity-50 bg-black m-5">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                Premier dry cleaning for expats' clothing.
              </h1>
              <p className="lead mb-12 text-white opacity-80">
                Experience top-tier dry cleaning tailored specifically for
                expatriates, preserving the quality of your clothing abroad.
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <Link to="/Providers">
                <button
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "#F58635",
                  }}
                >
                  See More <i class="fa-solid fa-arrow-right"></i>
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
