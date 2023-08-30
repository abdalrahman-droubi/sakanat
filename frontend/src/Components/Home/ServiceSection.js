import "./ServiceSection.css";
import img0 from "../../Assets/images/towels.png";
import img1 from "../../Assets/images/house.png";
import img2 from "../../Assets/images/house-keeping.png";
import img3 from "../../Assets/images/maintenance.png";
import { Link } from "react-router-dom";

function ServiceSection() {
  return (
    <section className="service" id="service">
      <h3>
        Our <span style={{ color: "#F58635" }}> Services</span>
      </h3>
      <div className="cards">
        <div>
          <span>
            <img src={img1} alt="" width="40px" height="40px" />
          </span>
          <Link to="">
            <h4>Find Your House</h4>
            <p>
              Student or Expatriate and trying to find a house? We help you find
              your requirements.
            </p>
          </Link>
        </div>
        <div>
          <span>
            <img src={img2} alt="" width="40px" height="40px" />
          </span>
          <Link to="">
            <h4>House Keeping</h4>
            <p>Get your House cleaned as soon as possible.</p>
          </Link>
        </div>
        <div>
          <span>
            <img src={img0} alt="" width="40px" height="40px" />
          </span>
          <Link to="">
            <h4>Dry Clean</h4>
            <p>
              Dry cleaning is one of our best services.High technologies are
              used.
            </p>
          </Link>
        </div>
        <div>
          <span>
            <img src={img3} alt="" width="40px" height="40px" />
          </span>
          <Link to="">
            <h4>Maintenance</h4>
            <p>Professional trained workers are on the fly!</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
