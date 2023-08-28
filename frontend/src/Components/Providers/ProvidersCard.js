import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProvidersCard({ setProvidersData, providersData,filterProvidersData,allfilterProvidersData }) {
  console.log(filterProvidersData);
  function generateStarIcons(rate) {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fa fa-star" />);
    }

    if (hasHalfStar) {
      stars.push(<i key={stars.length} className="fas fa-star-half-alt" />);
    }
    if (stars.length === 0) {
      return <span>not reated yet</span>;
    } else {
      return stars;
    }
  }

  function isOpen(provider) {
    const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
    const currentTime = new Date();

    const openingTimeStr = provider.workHours[currentDay].start;
    const closingTimeStr = provider.workHours[currentDay].end;

    const openingTime = new Date(currentTime);
    openingTime.setHours(Number(openingTimeStr.split(":")[0]));
    openingTime.setMinutes(Number(openingTimeStr.split(":")[1]));

    const closingTime = new Date(currentTime);
    closingTime.setHours(Number(closingTimeStr.split(":")[0]));
    closingTime.setMinutes(Number(closingTimeStr.split(":")[1]));

    return currentTime >= openingTime && currentTime <= closingTime;
  }
  return (
    <>
      {/* content */}
      <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
        <strong className="d-block py-2">
          {allfilterProvidersData.length} Providers found{" "}
        </strong>
        <div className="ms-auto">
          <select className="form-select d-inline-block w-auto border pt-1">
            <option value={0}>Best match</option>
            <option value={1}>Recommended</option>
            <option value={2}>High rated</option>
            <option value={3}>Randomly</option>
          </select>
        </div>
      </header>
      <div>
        {filterProvidersData.map((ele) => (
          <div className="row justify-content-center mb-3">
            <div className="col-md-12">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row gx-3">
                    <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                        <img
                          src={`http://localhost:5550/${ele.companyImage[0]}`}
                          className="w-100"
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-5 col-sm-7">
                      <h3>{ele.companyName}</h3>
                      <div className="d-flex flex-row">
                        <div className="text-warning mb-1 me-2">
                          {generateStarIcons(ele.rate)}
                          <span className="ms-1">
                            {ele.rate === 0 ? null : ele.rate}
                          </span>
                        </div>
                        <span className="text-muted">154 orders</span>
                      </div>
                      <p className="text mb-4 mb-md-0">{ele.description}</p>
                    </div>
                    <div className="col-xl-3 col-md-3 col-sm-5 d-flex flex-column  justify-content-between">
                      <div>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <h5 className="mb-1 me-1">{ele.serviceType}</h5>
                        </div>
                        <h6 className="text-success">{ele.city}</h6>
                        <h6
                          className={
                            isOpen(ele) ? "text-success" : "text-danger"
                          }
                        >
                          {isOpen(ele) ? "Open now" : "Closed now"}
                        </h6>
                      </div>
                      <div className="mt-4">
                        <Link to={`/ProviderDetails/${ele._id}`}>
                          <button
                            className="btn btn-primary shadow-0"
                            type="button"
                          >
                            View Services
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
}

export default ProvidersCard;
