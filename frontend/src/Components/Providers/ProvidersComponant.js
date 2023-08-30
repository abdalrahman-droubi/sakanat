import "./ProvidersComponant.css";
import imgCompany from "../../Assets/images/drycleen shop.jpg";
import { Link } from "react-router-dom";
import ProvidersCard from "./ProvidersCard";
import SideBarProviders from "./SideBarProviders";
import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../Layout/Breadcrumb";
import Loader from "../../Pages/Loder";

function ProvidersComponant() {
  const [providersData, setProvidersData] = useState([]);
  const [filterProvidersData, setfilterProvidersData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/api/getProviders")
      .then((response) => {
        console.log(response);
        setfilterProvidersData(response.data);
        setProvidersData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching providers data:", error);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const providersToDisplay = filterProvidersData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filterProvidersData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    providersData.length !==0 ?
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            {/* sidebar */}
            <SideBarProviders
              providersData={providersData}
              setProvidersData={setProvidersData}
              filterProvidersData={filterProvidersData}
              setfilterProvidersData={setfilterProvidersData}
            />
            {/* sidebar */}
            <div className="col-lg-9">
              {/* content */}
              <ProvidersCard
                // key={index}
                providersData={providersData}
                setProvidersData={setProvidersData}
                filterProvidersData={providersToDisplay}
                allfilterProvidersData={filterProvidersData}
              />
              {/* content */}
              {/* Pagination */}
              <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center mt-3"
              >
                <ul className="pagination">
                  <li
                    className={`page-item me-1 ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <span aria-hidden="true">«</span>
                    </button>
                  </li>
                  {/* Render the page numbers */}
                  {Array.from(
                    {
                      length: Math.ceil(
                        filterProvidersData.length / itemsPerPage
                      ),
                    },
                    (_, index) => (
                      <li
                        key={index}
                        className={`page-item me-1 ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    )
                  )}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <span aria-hidden="true">»</span>
                    </button>
                  </li>
                </ul>
              </nav>
              {/* Pagination */}
            </div>
          </div>
        </div>
      </section>
    </>
    :<Loader/>

    // <div className="provider">
    //   <div className="title">
    //     <h2>{serviceType.toLowerCase()} in {location.toLowerCase()}</h2>
    //     <hr style={{ height: 1, backgroundColor: "black" }} />
    //   </div>
    //   <div className="company">
    //     <img src={imgCompany} alt="" />
    //     <div className="text">
    //       <h4>DryClean Lab - دراي كلين لاب</h4>
    //       <p>
    //         DryClean Lab is a professional dry-cleaning shop that provides
    //         high-quality cleaning services for clothing, linens, and other
    //         textiles. The shop is equipped with the latest cleaning technology
    //         and uses environmentally-friendly cleaning solvents to ensure that
    //         each item is cleaned thoroughly and safely.
    //       </p>
    //       <p style={{ color: "green", fontSize: "large", fontWeight: "bold" }}>
    //         open
    //       </p>
    //     </div>
    //     <button>
    //       <a to="">View Services</a>
    //     </button>
    //   </div>
    //   <hr style={{ height: 1, margin: 0, backgroundColor: "black" }} />
    //   <div className="company">
    //     <img src="../images/drycleen shop.jpg" alt="" />
    //     <div className="text">
    //       <h4>DryClean Lab - دراي كلين لاب</h4>
    //       <p>
    //         DryClean Lab is a professional dry-cleaning shop that provides
    //         high-quality cleaning services for clothing, linens, and other
    //         textiles. The shop is equipped with the latest cleaning technology
    //         and uses environmentally-friendly cleaning solvents to ensure that
    //         each item is cleaned thoroughly and safely.
    //       </p>
    //       <p style={{ color: "green", fontSize: "large", fontWeight: "bold" }}>
    //         open
    //       </p>
    //     </div>
    //     <button>
    //       <a to="">View Services</a>
    //     </button>
    //   </div>
    //   <hr style={{ height: 1, margin: 0, backgroundColor: "black" }} />
    //   <div className="company">
    //     <img src="../images/drycleen shop.jpg" alt="" />
    //     <div className="text">
    //       <h4>DryClean Lab - دراي كلين لاب</h4>
    //       <p>
    //         DryClean Lab is a professional dry-cleaning shop that provides
    //         high-quality cleaning services for clothing, linens, and other
    //         textiles. The shop is equipped with the latest cleaning technology
    //         and uses environmentally-friendly cleaning solvents to ensure that
    //         each item is cleaned thoroughly and safely.
    //       </p>
    //       <p style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>
    //         close
    //       </p>
    //     </div>
    //     <button>
    //       <Link to="">View Services</Link>
    //     </button>
    //   </div>
    //   <hr style={{ height: 1, margin: 0, backgroundColor: "black" }} />
    // </div>
  );
}

export default ProvidersComponant;
