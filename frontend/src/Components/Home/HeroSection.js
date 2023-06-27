// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "./HeroSection.css";
// import img0 from "../../Assets/images/hero-img0.jpg";
// import img1 from "../../Assets/images/hero-img1.jpg";
// import img2 from "../../Assets/images/hero-img2.jpg";
// import img3 from "../../Assets/images/hero-img3.jpg";
// import { Link } from "react-router-dom";

// function HeroSection() {
//   return (
//     <>
//       <Carousel fade pause={false} controls={false}>
//         <Carousel.Item interval={3000}>
//           <img className="d-block w-100" src={img1} alt="First slide" />
//           <Carousel.Caption className="caption1">
//             <h2>You need to clean your house?</h2>
//             <button className="btn-hero">
//               <Link className="btn-Link"> Getting started </Link>
//             </button>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={3000}>
//           <img className="d-block w-100" src={img0} alt="Second slide" />
//           <Carousel.Caption className="caption2">
//             <h2>or get a house? </h2>
//             <button className="btn-hero">
//               <Link className="btn-Link"> Getting started </Link>
//             </button>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={3000}>
//           <img className="d-block w-100" src={img2} alt="Third slide" />
//           <Carousel.Caption className="caption3">
//             <h3>or you maintain your residence? </h3>
//             <button className="btn-hero">
//               <Link className="btn-Link"> Getting started </Link>
//             </button>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={3000}>
//           <img className="d-block w-100" src={img3} alt="Third slide" />
//           <Carousel.Caption className="caption4">
//             <h3>or do you want to do your laundry?</h3>
//             <button className="btn-hero">
//               <Link className="btn-Link"> Getting started </Link>
//             </button>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   );
// }

// export default HeroSection;

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
          src={slider1}
          alt="image 1"
          className="d-block w-100"
          style={{ height: "75vh" }}
        />
        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
              Save Nature with Us
            </h1>
            <p className="lead mb-12 text-white opacity-80">
              Nature is a vital source of life, providing us with clean air, fresh water, and healthy food. However, it is deteriorating and becoming polluted due to our unsustainable human activities.
            </p>
            <div className="flex justify-center gap-2">
              <Link to="/services">
                <button className="btn btn-lg btn-success">Donate a Tree</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slider2}
          alt="image 1"
          className="d-block w-100"
          style={{ height: "75vh" }}
        />
        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
              It's Time to Make a Better Impact
            </h1>
            <p className="lead mb-12 text-white opacity-80">
              Join our team to volunteer in tree planting and be part of the global movement to conserve the environment. There may be opportunities in parks, hospitals, schools, and other places. Take action now and submit your volunteer application for tree planting. Nature awaits your contribution.
            </p>
            <div className="flex justify-center gap-2">
              <Link to="/signup">
                <button className="btn btn-lg btn-success">Volunteer Now</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slider3}
          alt="image 1"
          className="d-block w-100"
          style={{ height: "75vh" }}
        />
        <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
              We've Planted Over 1000 Trees!
            </h1>
            <p className="lead mb-12 text-white opacity-80">
              You will contribute to creating new forests, improving air quality, and providing habitats for diverse wildlife. These trees are not just plants; they are a source of life, oxygen, and spaces for recreation as well.
            </p>
            <div className="flex justify-center gap-2">
              <Link to="/signup">
                <button className="btn btn-lg btn-success">Join Us</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
