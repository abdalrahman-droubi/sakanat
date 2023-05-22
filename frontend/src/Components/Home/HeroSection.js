import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./HeroSection.css";
import img0 from "../../Assets/images/hero-img0.jpg";
import img1 from "../../Assets/images/hero-img1.jpg";
import img2 from "../../Assets/images/hero-img2.jpg";
import img3 from "../../Assets/images/hero-img3.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption className="caption1">
            <h2>You need to clean your house?</h2>
            <button className="btn-hero">
              <Link className="btn-Link"> Getting started </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={img0} alt="Second slide" />
          <Carousel.Caption className="caption2">
            <h2>or get a house? </h2>
            <button className="btn-hero">
              <Link className="btn-Link"> Getting started </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={img2} alt="Third slide" />
          <Carousel.Caption className="caption3">
            <h3>or you maintain your residence? </h3>
            <button className="btn-hero">
              <Link className="btn-Link"> Getting started </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption className="caption4">
            <h3>or do you want to do your laundry?</h3>
            <button className="btn-hero">
              <Link className="btn-Link"> Getting started </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeroSection;
