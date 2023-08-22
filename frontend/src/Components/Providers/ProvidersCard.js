import axios from "axios";
import React, { useEffect, useState } from "react";

function ProvidersCard({setProvidersData,providersData}) {
 
  return (
    <>
      {/* content */}
      <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
        <strong className="d-block py-2">{providersData.length} Providers found </strong>
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
        {providersData.map((ele)=>
        <div className="row justify-content-center mb-3">
          <div className="col-md-12">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row g-0">
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
                    <h5>{ele.companyName}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-warning mb-1 me-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fas fa-star-half-alt" />
                        <span className="ms-1">{ele.rate}</span>
                      </div>
                      <span className="text-muted">154 orders</span>
                    </div>
                    <p className="text mb-4 mb-md-0">
                     {ele.description}
                    </p>
                  </div>
                  <div className="col-xl-3 col-md-3 col-sm-5">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">$34,50</h4>
                      <span an className="text-danger">
                        <s>$49.99</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="mt-4">
                      <button
                        className="btn btn-primary shadow-0"
                        type="button"
                      >
                        Buy this
                      </button>
                      <a
                        href="#!"
                        className="btn btn-light border px-2 pt-2 icon-hover"
                      >
                        <i className="fas fa-heart fa-lg px-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
      <hr />
    </>
  );
}

export default ProvidersCard;
