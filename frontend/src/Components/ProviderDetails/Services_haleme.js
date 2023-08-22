import React from "react";
import "./Services_haleme.css";
import slid1 from "../../Assets/images/hero-img0.jpg";
import Test_img from "../../Assets/images/A-Blank-pic.png";
import slid3 from "../../Assets/images/hero-img2.jpg";
import location_img from "../../Assets/images/map.jpg";
import { Form } from "react-bootstrap";

const Services_haleme = () => {
  return (
    <>
      <div className="container servaices__container">
        <div className="row justify-content-center">
          <div className="col-11 col-lg-7 col-md-9">
            <div className="row">
              <div className="col-12 services__title">
                <h1>Dry-Clean X Company</h1>
                <p>sewind & Altrations , Dry Cleaning</p>
                <p>
                  <span className="span__1">Open</span>9:00 AM - 5:00 PM{" "}
                  <span className="span__2">See hours</span>
                </p>
              </div>

              <hr />

              <div className="col-12">
                <section className="pt-5 pb-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <h3 className="mb-3">Related Photos </h3>
                      </div>
                      <div className="col-6 text-right d-flex justify-content-around">
                        <a
                          className="btn btn-primary mb-3 mr-1"
                          href="#carouselExampleIndicators2"
                          role="button"
                          data-slide="prev"
                        >
                          <i className="fa fa-arrow-left" />
                        </a>
                        <a
                          className="btn btn-primary mb-3 "
                          href="#carouselExampleIndicators2"
                          role="button"
                          data-slide="next"
                        >
                          <i className="fa fa-arrow-right" />
                        </a>
                      </div>
                      <div className="col-12">
                        <div
                          id="carouselExampleIndicators2"
                          className="carousel slide"
                          data-ride="carousel"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <div className="row">
                                <div className="col-md-4 mb-3">
                                  {/* <div className="card"> */}
                                  <img
                                    className="img-fluid"
                                    alt="100%x280"
                                    src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d"
                                  />
                                  {/* <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div> */}
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row">
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row">
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ee8417f0ea2a50d53a12665820b54e23"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=8ac55cf3a68785643998730839663129"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=5ee4fd5d19b40f93eadb21871757eda6"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=5ee4fd5d19b40f93eadb21871757eda6"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                  <div className="card">
                                    <img
                                      className="img-fluid"
                                      alt="100%x280"
                                      src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=5ee4fd5d19b40f93eadb21871757eda6"
                                    />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        Special title treatment
                                      </h4>
                                      <p className="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <hr />

              <div className="col-12 card__services">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center mb-5">
                    <h1>Our Services</h1>
                  </div>
                </div>
                <div className="row gap-5 justify-content-center">
                  <div className="col-4 card__shopes text-center">
                    <img src={Test_img} alt="" />
                    <h1 className="text-center">servces</h1>
                    <p className="text-center mt-2">price</p>
                  </div>

                  <div className=" col-4 card__shopes text-center">
                    <img src={Test_img} alt="" />
                    <h1 className="text-center">servces</h1>
                    <p className="text-center mt-2">price</p>
                  </div>

                  <div className=" col-4 card__shopes text-center">
                    <img src={Test_img} alt="" />
                    <h1 className="text-center">servces</h1>
                    <p className="text-center mt-2">price</p>
                  </div>

                  <div className=" col-4 card__shopes text-center">
                    <img src={Test_img} alt="" />
                    <h1 className="text-center">servces</h1>
                    <p className="text-center mt-2">price</p>
                  </div>

                  <div className=" col-4 card__shopes text-center">
                    <img src={Test_img} alt="" />
                    <h1 className="text-center">servces</h1>
                    <p className="text-center mt-2">price</p>
                  </div>

                  <div className=" col-4 card__shopes text-center">
                    <img src={Test_img} alt="" />
                    <h1 className="text-center">servces</h1>
                    <p className="text-center mt-2">price</p>
                  </div>
                </div>
              </div>

              <hr />

              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-8">
                    <h2 className="mb-3">Location & Hours</h2>
                    <img src={location_img} />
                    <div style={{ color: "skyblue" }}>4721 Geary Blvd</div>
                    <div>San Francisco, CA</div>
                    <div>94118</div>
                    <div>Inner Richmond</div>
                    <div style={{ color: "gray" }}>Serving San Francisco</div>
                    <div style={{ color: "gray" }}>Area</div>
                  </div>
                  <div className="col-3 col-md-7 d-flex flex-column justify-content-end">
                    <p className="text-center">
                      <span >Mon</span> 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-center">
                      <span>Tue</span>9:00 AM - 5:00 PM
                    </p>
                    <p className="text-center">
                      <span>Wed</span>9:00 AM - 5:00 PM
                    </p>
                    <p className="text-center">
                      <span>Thu</span>9:00 AM - 5:00 PM
                    </p>
                    <p className="text-center">
                      <span>Fri</span>10:00 AM - 5:00 PM
                    </p>
                    <p className="text-center">
                      <span>Sat</span>10:00 AM - 5:00 PM
                    </p>
                    <p className="text-center">
                      <span>Sun</span>Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-5 col-md-3 main_form_services sticky-top "
            style={{ height: "fit-content", zIndex: "-12" }}
          >
            <form
              className="card ps-4 pe-4 pb-4"
              style={{ backgroundColor: "#00A3E0", height: "fit-content" }}
            >
              <h4 className="d-flex justify-content-center mb-3 mt-2">
                Request a Service
              </h4>
              <Form.Select aria-label="Default select example">
                <option>Type of service</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              {/* <div className="input-container">
                <select name="cars" id="cars" className="input-containerr">
                  <option value="Type of service">Type of service</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div> */}
              <Form.Group
                className="mb-3 mt-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="When do you require this service?"
                />
              </div>

              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  placeholder="Are there any other details you'd like to share?"
                />
              </div>

              <div className="input-container">
                <input type="text" placeholder="What is your Phone Number?" />
              </div>

              <div className="input-container">
                <input type="text" placeholder="What is your location" />
              </div>
              <button type="submit" className="submit">
                Request a Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services_haleme;
