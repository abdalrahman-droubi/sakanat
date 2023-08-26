import React, { useEffect, useState } from "react";
import "./Services_haleme.css";
import slid1 from "../../Assets/images/hero-img0.jpg";
import Test_img from "../../Assets/images/A-Blank-pic.png";
import slid3 from "../../Assets/images/hero-img2.jpg";
import location_img from "../../Assets/images/map.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderForm from "./OrderForm";
import CompanyImage from "./CompanyImage";

const Services_haleme = () => {
  const { id } = useParams();
  const [providerData, setProviderData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/getOneProviders/${id}`)
      .then((response) => {
        setProviderData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching provider data:", error);
      });
  }, [id]);

  const getCurrentDay = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    return daysOfWeek[today.getDay()];
  };

  const isCompanyOpen = () => {
    const currentDay = getCurrentDay();
    const currentTime = new Date();
    const workHours = providerData?.workHours?.[currentDay];

    if (workHours && workHours.start !== "Close" && workHours.end !== "Close") {
      const startHour = parseInt(workHours.start.split(":")[0]);
      const startMinute = parseInt(workHours.start.split(":")[1]);
      const endHour = parseInt(workHours.end.split(":")[0]);
      const endMinute = parseInt(workHours.end.split(":")[1]);

      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();

      if (
        (currentHour > startHour ||
          (currentHour === startHour && currentMinute >= startMinute)) &&
        (currentHour < endHour ||
          (currentHour === endHour && currentMinute <= endMinute))
      ) {
        return true;
      }
    }

    return false;
  };

  const scrollToTargetSection = () => {
    const targetSection = document.getElementById("workHours");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="row justify-content-between servaices__container">
          <div className="col-11 col-lg-7 col-md-9">
            <div className="row">
              <div className="col-12 services__title">
                <h1>{providerData?.companyName}</h1>
                <p className="services__title_description">
                  {providerData?.description}
                </p>
                <p>
                  <span
                    className={
                      isCompanyOpen()
                        ? "text-success span__1"
                        : "text-danger span__1"
                    }
                  >
                    {isCompanyOpen() ? "Open" : "Closed"}
                    {providerData?.workHours?.[getCurrentDay()]?.start ===
                    "Close"
                      ? ""
                      : ` ${
                          providerData?.workHours?.[getCurrentDay()]?.start
                        } - ${providerData?.workHours?.[getCurrentDay()]?.end}`}
                  </span>
                  <span className="span__2" onClick={scrollToTargetSection}>
                    See hours
                  </span>
                </p>
              </div>
              <hr />
              
              <div className="col-12">
                <section className="pt-1 pb-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <h3 className="mb-3">
                          Related Photos {providerData?.companyImage?.length}
                        </h3>
                      </div>
                      <CompanyImage companyImage={providerData.companyImage} />
                    </div>
                  </div>
                </section>
              </div>
              <hr />
              <div className="col-12 card__services">
                <div className="row">
                  <div className="col-12 d-flex  mb-3">
                    <h3>Company Services</h3>
                  </div>
                </div>
                <div className="row gap-5 justify-content-center">
                  {providerData?.services?.map((ele) => (
                    <div className="col-4 card__shopes text-center">
                      <img src={Test_img} alt="" />
                      <h1 className="text-center">{ele.name}</h1>
                      <p className="text-center mt-2">{ele.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div className="col-12" id="workHours">
                <h2 className="mb-3">Location & Hours</h2>
                <div className="services__Location__Hours ">
                  <div className="col-8">
                    <img src={location_img} />
                    <div style={{ color: "skyblue" }}>4721 Geary Blvd</div>
                    <div>San Francisco, CA</div>
                    <div>94118</div>
                    <div>Inner Richmond</div>
                    <div style={{ color: "gray" }}>Serving San Francisco</div>
                    <div style={{ color: "gray" }}>Area</div>
                  </div>
                  <div className=" d-flex flex-column justify-content-start align-items-start services__Hours">
                    {providerData?.workHours &&
                      Object.keys(providerData?.workHours)
                        .slice(0, 7)
                        .map((day) => (
                          <p className="text-center" key={day}>
                            <strong>{day} : </strong>{" "}
                            {providerData.workHours[day].start == "Close" ||
                            providerData.workHours[day].end == "Close"
                              ? "Closed"
                              : `${providerData.workHours[day].start} - ${providerData.workHours[day].end}`}
                          </p>
                        ))}
                    <p className="text-center"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------Form ----------------------------------------------------- */}
          <OrderForm isCompanyOpen={isCompanyOpen} companyId={id} providerData={providerData} />
          {/* -------------------------------------Form ----------------------------------------------------- */}
      </div>
    </>
  );
};

export default Services_haleme;
