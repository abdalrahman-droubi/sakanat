import React from "react";
import "../AboutPage/About.css";
import { homeAbout } from "../../dummydata";
// import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        {/* Insert your image source here */}
        <img src="https://images.pexels.com/photos/17691844/pexels-photo-17691844/free-photo-of-model-with-angel-wings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" className="img-fluid" style={{height:"45rem", width:"35rem", marginTop:"3rem"}} />
      </div>
      <div className="col-md-6">
        <h2 className="text-center mb-5">
          Our <span style={{ color: "#F58635" }}> Feature</span>
        </h2>
        <div className="items">
          {homeAbout.map((val) => {
            return (
              <div className="item flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>
<br />
<br />
<br />

      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
