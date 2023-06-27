import { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./Layout/navbar/Navbar";
import Footer from "./Layout/footer/Footer";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactUs";
import Login from "./Registration/Login/Login";
import SingnUp from "./Registration/signUp/SingnUp";
import Services from "./Pages/Services";
import { UserProfile } from "./Pages/UserProfile";
import { EditProfile } from "./Components/UserProfile/EditProfile";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/Checkout" element={<Checkout />} /> */}
        <Route path="/SignUp" element={<SingnUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
