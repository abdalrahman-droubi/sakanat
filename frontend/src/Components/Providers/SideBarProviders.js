import React, { useState } from "react";

function SideBarProviders({ providersData, setProvidersData }) {
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [selectedRatings, setSelectedRatings] = useState([]);

//   const handleServiceTypeChange = (service) => {
//     console.log(service);
//     if (selectedServices.includes(service)) {
//       setSelectedServices(selectedServices.filter((s) => s !== service));
//     } else {
//       setSelectedServices([...selectedServices, service]);
//     }
//   };    
//   const filterProviders = () => {
//     return providersData.filter((provider) => {
//       const serviceTypeMatch = selectedServices.length === 0 || selectedServices.includes(provider.serviceType);
//     //   const cityMatch = selectedCities.length === 0 || selectedCities.includes(provider.city);
//       // Implement rating filtering logic based on selectedRatings
  
//       return serviceTypeMatch ;
//     });
//   };
  

//   const filteredProviders = filterProviders();
// setProvidersData(filteredProviders);

  return (
    <>
      {/* sidebar */}
      <div className="col-lg-3">
        {/* Toggle button */}
        <button
          className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContentt"
          aria-controls="navbarSupportedContentt"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>Show filter</span>
        </button>
        {/* Collapsible wrapper */}
        <div
          className="collapse card d-lg-block mb-5"
          id="navbarSupportedContentt"
        >
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-dark bg-light"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  SERVICES TYPE
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
              >
                <div className="accordion-body">
                  <div>
                    {/* Checked checkbox */}
                    <div className="form-check">
                      <input
                        // defaultValue=""
                        // defaultChecked=""
                        className="form-check-input"
                        type="checkbox"
                        value="House Keeping"
                        id="flexCheckChecked1"
                        // checked={selectedServices.includes("House Keeping")}
                        // onChange={(e) =>
                        //   handleServiceTypeChange(e.target.value)
                        // }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked1"
                      >
                        House Keeping
                      </label>
                      <span className="badge badge-secondary float-end">
                        120
                      </span>
                    </div>
                    {/* Checked checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked2"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked2"
                      >
                        Hostel
                      </label>
                      <span className="badge badge-secondary float-end">
                        15
                      </span>
                    </div>
                    {/* Checked checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked3"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked3"
                      >
                        Dry Clean
                      </label>
                      <span className="badge badge-secondary float-end">
                        35
                      </span>
                    </div>
                    {/* Checked checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked4"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked4"
                      >
                        Maintenance
                      </label>
                      <span className="badge badge-secondary float-end">
                        89
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button text-dark bg-light"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  CITY
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body">
                  <div>
                    {/* Jordanian cities checkboxes */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox1"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox1"
                      >
                        Amman
                      </label>
                      <span className="badge badge-secondary float-end">
                        120
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox2"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox2"
                      >
                        Irbid
                      </label>
                      <span className="badge badge-secondary float-end">
                        15
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox3"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox3"
                      >
                        Aqaba
                      </label>
                      <span className="badge badge-secondary float-end">
                        35
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox4"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox4"
                      >
                        Zarqa
                      </label>
                      <span className="badge badge-secondary float-end">
                        89
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox5"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox5"
                      >
                        Ajloun
                      </label>
                      <span className="badge badge-secondary float-end">
                        42
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox6"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox6"
                      >
                        Jerash
                      </label>
                      <span className="badge badge-secondary float-end">
                        18
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox7"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox7"
                      >
                        Balqa
                      </label>
                      <span className="badge badge-secondary float-end">
                        18
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox8"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox8"
                      >
                        Mafraq
                      </label>
                      <span className="badge badge-secondary float-end">
                        18
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox9"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox9"
                      >
                        Madaba
                      </label>
                      <span className="badge badge-secondary float-end">
                        18
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox10"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox10"
                      >
                        Karak
                      </label>
                      <span className="badge badge-secondary float-end">
                        18
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox11"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox11"
                      >
                        Tafilah
                      </label>
                      <span className="badge badge-secondary float-end">
                        18
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="cityCheckbox12"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cityCheckbox12"
                      >
                        Ma'an
                      </label>
                      <span className="badge badge-secondary float-end">
                        18
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button text-dark bg-light"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#panelsStayOpen-collapseFive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFive"
                >
                  Ratings
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFive"
                className="accordion-collapse collapse show"
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  {/* Default checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                    </label>
                  </div>
                  {/* Default checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                    </label>
                  </div>
                  {/* Default checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                    </label>
                  </div>
                  {/* Default checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
    </>
  );
}

export default SideBarProviders;
