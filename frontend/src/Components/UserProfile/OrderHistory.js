import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/userDataContext";
import axios from "axios";

export const OrderHistory = () => {
  const { user } = useContext(UserDataContext);
  const [requestServices, setrequestServices] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/getAllRequest/${user._id}`)
      .then((response) => {
        console.log(response.data);
        setrequestServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching OrderHistory data:", error);
      });
  }, [user._id]);
  return (
    <>
      <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane  fade  active show"
            id="orders"
            role="tabpanel"
            aria-labelledby="orders-tab"
          >
            <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
            {requestServices?.map((ele) => {
              const createdAtDate = new Date(ele.createdAt);
              const requestedOn =
                createdAtDate.toDateString() +
                ", " +
                createdAtDate.toLocaleTimeString();

              const dateTimeDate = new Date(ele.dateTime);
              const deliveredOn =
                dateTimeDate.toDateString() +
                ", " +
                dateTimeDate.toLocaleTimeString();
              return (
                <div className="bg-white card mb-4 order-list shadow-sm">
                  <div className="gold-members p-4">
                    <div className="media">
                      <div className="media-body">
                        <h5 className="mb-2">{ele.provider.companyName}</h5>
                        <div className="d-flex float-end flex-column ">
                          <span className=" text-info">
                          <strong className="text-black"> Requested on : </strong>
                             {requestedOn}
                          </span>
                          <span className="text-info">
                           <strong className="text-black"> Delivered on : </strong>
                            {deliveredOn}
                          </span>
                        </div>
                        <p className="text-gray mb-1">
                          <i className="icofont-location-arrow" /> 730 S
                          Mendenhall Rd, Memphis, TN 38117, USA
                        </p>
                        <p className="text-gray mb-3">
                          <i className="icofont-list" /> ORDER #25102589748{" "}
                          <i className="icofont-clock-time ml-2" /> Mon, Nov 12,
                          6:26 PM
                        </p>
                        <p className="text-dark">
                          Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta
                          in Red Sauce x 1
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div className="d-flex gap-1 order-2">
                            <a className="btn btn-sm btn-outline-dark" href="#">
                              <i className="icofont-headphone-alt" /> HELP
                            </a>
                            <a
                              className="btn btn-sm "
                              style={{ backgroundColor: "#F58635" }}
                              href="#"
                            >
                              <i className="icofont-refresh" /> REORDER
                            </a>
                          </div>
                          <p className="mb-0 text-black text-primary pt-2 order-1">
                            <b className="text-black font-weight-bold">
                              {" "}
                              Total Paid:
                            </b>{" "}
                            $300
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
