import React, { useEffect, useState } from "react";

function SideBarProviders({
  providersData,
  setProvidersData,
  filterProvidersData,
  setfilterProvidersData,
}) {
  const servaicestypeData = [
    { name: "House Keeping", count: 120 },
    { name: "Hostel", count: 15 },
    { name: "Dry Clean", count: 35 },
    { name: "Maintenance", count: 89 },
  ];

  const citiesData = [
    { name: "Amman", count: 120 },
    { name: "Irbid", count: 15 },
    { name: "Aqaba", count: 35 },
    { name: "Zarqa", count: 89 },
    { name: "Ajloun", count: 89 },
    { name: "Jerash", count: 89 },
    { name: "Balqa", count: 89 },
    { name: "Mafraq", count: 89 },
    { name: "Madaba", count: 89 },
    { name: "Karak", count: 89 },
    { name: "Tafilah", count: 89 },
    { name: "Ma'an", count: 89 },
  ];

  const ratingsData = [
    { stars: 5, label: "5 Stars" },
    { stars: 4, label: "4 Stars" },
    { stars: 3, label: "3 Stars" },
    { stars: 2, label: "2 Stars" },
    { stars: 1, label: "1 Star" },
  ];
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleServiceTypeChange = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(
        selectedServices.filter((service) => service !== serviceName)
      );
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleCityChange = (cityName) => {
    if (selectedCities.includes(cityName)) {
      setSelectedCities(selectedCities.filter((city) => city !== cityName));
    } else {
      setSelectedCities([...selectedCities, cityName]);
    }
  };

  const handleRatingChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const filterProviders = () => {
    const filteredProviders = providersData.filter((provider) => {
      // Filter by selected services
      if (selectedServices.length > 0) {
        const providerServiceType = provider.serviceType;
        if (!selectedServices.includes(providerServiceType)) {
          return false;
        }
      }

      // Filter by selected cities
      if (
        selectedCities.length > 0 &&
        !selectedCities.includes(provider.city)
      ) {
        return false;
      }

      // Filter by selected ratings
      if (selectedRatings.length > 0) {
        const providerRating = provider.rate;
        if (!selectedRatings.includes(providerRating)) {
          return false;
        }
      }

      return true;
    });

    setfilterProvidersData(filteredProviders);
  };
  useEffect(() => filterProviders(), [selectedServices, selectedCities,selectedRatings]);
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
                    {servaicestypeData.map((service, index) => (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={service.name}
                          id={`flexCheckChecked${index}`}
                          checked={selectedServices.includes(service.name)}
                          onChange={(e) => {
                            handleServiceTypeChange(e.target.value);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`flexCheckChecked${index}`}
                        >
                          {service.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* City section */}
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
                    {/* Dynamic city checkboxes */}
                    {citiesData.map((city, index) => (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={city.name}
                          id={`cityCheckbox${index}`}
                          checked={selectedCities.includes(city.name)}
                          onChange={(e) => {
                            handleCityChange(e.target.value);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`cityCheckbox${index}`}
                        >
                          {city.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ratings section */}
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
                  {ratingsData.map((rating, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={rating.stars}
                        id={`ratingCheckbox${index}`}
                        checked={selectedRatings.includes(rating.stars)}
                        onChange={(e) => {
                          handleRatingChange(rating.stars);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`ratingCheckbox${index}`}
                      >
                        {Array.from({ length: rating.stars }, (_, i) => (
                          <i key={i} className="fas fa-star text-warning" />
                        ))}
                        {Array.from({ length: 5 - rating.stars }, (_, i) => (
                          <i key={i} className="fas fa-star text-secondary" />
                        ))}
                      </label>
                    </div>
                  ))}
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
