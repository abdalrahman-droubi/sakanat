import "./CompanyCard.css";
import imgCompany from '../../Assets/images/drycleen shop.jpg'
import { Link } from "react-router-dom";

function CompanyCard(props) {
  const { serviceType, location } = props;
  return (
    <div className="provider">
      <div className="title">
        <h2>{serviceType.toLowerCase()} in {location.toLowerCase()}</h2>
        <hr style={{ height: 1, backgroundColor: "black" }} />
      </div>
      <div className="company">
        <img src={imgCompany} alt="" />
        <div className="text">
          <h4>DryClean Lab - دراي كلين لاب</h4>
          <p>
            DryClean Lab is a professional dry-cleaning shop that provides
            high-quality cleaning services for clothing, linens, and other
            textiles. The shop is equipped with the latest cleaning technology
            and uses environmentally-friendly cleaning solvents to ensure that
            each item is cleaned thoroughly and safely.
          </p>
          <p style={{ color: "green", fontSize: "large", fontWeight: "bold" }}>
            open
          </p>
        </div>
        <button>
          <a to="">View Services</a>
        </button>
      </div>
      <hr style={{ height: 1, margin: 0, backgroundColor: "black" }} />
      <div className="company">
        <img src="../images/drycleen shop.jpg" alt="" />
        <div className="text">
          <h4>DryClean Lab - دراي كلين لاب</h4>
          <p>
            DryClean Lab is a professional dry-cleaning shop that provides
            high-quality cleaning services for clothing, linens, and other
            textiles. The shop is equipped with the latest cleaning technology
            and uses environmentally-friendly cleaning solvents to ensure that
            each item is cleaned thoroughly and safely.
          </p>
          <p style={{ color: "green", fontSize: "large", fontWeight: "bold" }}>
            open
          </p>
        </div>
        <button>
          <a to="">View Services</a>
        </button>
      </div>
      <hr style={{ height: 1, margin: 0, backgroundColor: "black" }} />
      <div className="company">
        <img src="../images/drycleen shop.jpg" alt="" />
        <div className="text">
          <h4>DryClean Lab - دراي كلين لاب</h4>
          <p>
            DryClean Lab is a professional dry-cleaning shop that provides
            high-quality cleaning services for clothing, linens, and other
            textiles. The shop is equipped with the latest cleaning technology
            and uses environmentally-friendly cleaning solvents to ensure that
            each item is cleaned thoroughly and safely.
          </p>
          <p style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>
            close
          </p>
        </div>
        <button>
          <Link to="">View Services</Link>
        </button>
      </div>
      <hr style={{ height: 1, margin: 0, backgroundColor: "black" }} />
    </div>
  );
}

export default CompanyCard;
