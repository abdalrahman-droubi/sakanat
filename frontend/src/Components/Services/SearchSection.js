import "./SearchSection.css";
import CompanyCard from "./CompanyCard";
import { useState } from "react";

function SearchSection() {
  const [serviceType, setServiceType] = useState("Service");
  const [location, setLocation] = useState("Location");

  function handleSubmitSearch(e) {
    e.preventDefault();
    setServiceType(e.target.service.value)
    setLocation(e.target.Location.value)
  }
  return (
    <>
      <form onSubmit={handleSubmitSearch}>
        <div className="select">
          <select name="service" id="service" required aria-controls="">
            <option>Services</option>
            <option value="Find House">Find House</option>
            <option value="House Keeping">House Keeping</option>
            <option value="Dry Clean">Dry Clean</option>
            <option value="Maintenance">Maintenance</option>
          </select>
          <div></div>
          <select name="Location" id="Location" required>
            <option>Location</option>
            <option value="Amman">Amman</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Irbid">Irbid</option>
            <option value="Aqaba">Aqaba</option>
            <option value="Ma'an">Ma'an</option>
            <option value="Al-Tafila">Al-Tafila </option>
            <option value="Jerash">Jerash</option>
          </select>
          <button type="submit">Search</button>
        </div>
      </form>
      <CompanyCard serviceType={serviceType} location={location}/>
    </>
  );
}

export default SearchSection;
