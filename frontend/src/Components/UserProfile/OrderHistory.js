import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/userDataContext";
import axios from "axios";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import Loader from "../../Pages/Loder";

export const OrderHistory = () => {
  const { user } = useContext(UserDataContext);
  const [requestServices, setrequestServices] = useState([]);
  const [showRating, setShowRating] = useState(false);
  const [showRatingindex, setShowRatingCard] = useState();
  const [rating, setRating] = useState(0);
  const [ lodaer,setLodaer] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/getAllRequest/${user._id}`)
      .then((response) => {
        console.log(response.data);
        setrequestServices(response.data);
        setLodaer(true)
      })
      .catch((error) => {
        console.error("Error fetching OrderHistory data:", error);
      });
  }, [user._id]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleSubmitRating = (companyId) => {
    axios
    .put(`http://localhost:5500/api/updateProvidrRating/${companyId}`,{rating})
    .then((response) => {
      console.log(response.data);;
    })
    .catch((error) => {
      console.error("Error update rating data:", error);
    });
    setShowRating(false);
  };
  return (
    lodaer?
    <>
      <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
      {requestServices.length !== 0?
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane  fade  active show"
            id="orders"
            role="tabpanel"
            aria-labelledby="orders-tab"
          >
            <h4 className="font-weight-bold mt-0 mb-4"> Orders</h4>
            {requestServices?.map((ele, index) => {
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
                <div
                  className="bg-white card mb-4 order-list shadow-sm"
                  key={index}
                >
                  <div className="gold-members p-4">
                    <div className="media">
                      <div className="media-body">
                        <div className="d-flex justify-content-between">
                          <h3 className="mb-2">{ele.provider.companyName}</h3>
                          <strong className="float-end">
                            OrderId : #{ele._id}
                          </strong>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap">
                          <div>
                            <p className=" mb-1">
                              <strong>status : </strong>
                              <span
                                className={
                                  ele.status == "pending" ||
                                  ele.status == "inprogres"
                                    ? "text-warning"
                                    : ele.status == "completed"
                                    ? "text-success"
                                    : "text-danger"
                                }
                              >
                                {ele.status}
                              </span>
                            </p>
                            <p className="text-gray mb-1">
                              <strong> service Type : </strong>{" "}
                              {ele.serviceType.name}
                            </p>
                            <p className="text-gray mb-1">
                              <strong> phone Number : </strong>{" "}
                              {ele.phoneNumber}
                            </p>
                            <p className="text-dark mb-1">
                              <strong>details : </strong>
                              {ele.details}
                            </p>
                          </div>
                          <div>
                            <p className=" mb-1">
                              <strong>company Location : </strong>
                              <span className="text-gray mb-1">
                                {ele.provider.city}
                              </span>
                            </p>
                            <p className="text-gray mb-1">
                              <strong> company service : </strong>{" "}
                              {ele.provider.serviceType}
                            </p>
                            <p className="text-gray mb-1">
                              <strong>company phone number : </strong>{" "}
                              {ele.provider.phoneNumber}
                            </p>
                          </div>
                          <div className="d-flex float-end flex-column ">
                            <span className=" text-info">
                              <strong className="text-black">
                                {" "}
                                Requested on :{" "}
                              </strong>
                              {requestedOn}
                            </span>
                            <span className="text-info">
                              <strong className="text-black">
                                {" "}
                                Delivered on :{" "}
                              </strong>
                              {deliveredOn}
                            </span>
                            <span className="text-info">
                              <strong className="text-black">
                                {" "}
                                Delivered on :{" "}
                              </strong>
                              {ele.location}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <div className="d-flex gap-1 order-2">
                            {showRating === true && showRatingindex === index && (
                              <div>
                                <RatingStars
                                  totalStars={5}
                                  initialRating={rating}
                                  onRatingChange={handleRatingChange}
                                />
                                <button
                                  onClick={() => handleSubmitRating(ele.provider._id)}
                                  className="btn btn-sm "
                                  style={{ backgroundColor: "#F58635" }}
                                >
                                  submit rating
                                </button>
                              </div>
                            )}
                            {(showRating === false || showRating === true )  && showRatingindex !== index && (
                              <div className="d-flex gap-1 order-2">
                                <span
                                  className="btn btn-sm btn-outline-dark"
                                  onClick={() => {
                                    setShowRating(true);
                                    setShowRatingCard(index);
                                  }}
                                >
                                  <i className="icofont-headphone-alt" />{" "}
                                  service rating
                                </span>
                              </div>
                            )}
                          </div>
                          <p className="mb-0 text-black text-primary pt-2 order-1">
                            <b className="text-black font-weight-bold">
                              {" "}
                              Total Paid:
                            </b>{" "}
                            {ele.serviceType.price} JD
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
        :<>
        <h3>There are no requests yet</h3>
        <Link to={"/Providers"}>
        <button className="btn">Make request now</button>
        </Link>
        </>}
      </div>
    </>
    :<Loader/>
  );
};
