// import React, {  useState } from "react";
import "../Components/UserProfile/UserProfile.css";
import { Link} from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { OrderHistory } from "../Components/UserProfile/OrderHistory";
import { UserInfo } from "../Components/UserProfile/UserInfo";


export const UserProfile = () => {
  // const [activeLink, setActiveLink] = useState("home");

  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb my-4">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              My Profile
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="Profile"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="Profile" title="My Profile">
                <UserInfo />
              </Tab>
              <Tab eventKey="Order History" title="Order History">
                <OrderHistory />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
        </>
  );
};