import { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./Layout/navbar/Navbar";
import Footer from "./Layout/footer/Footer";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactUs";
import Login from "./Registration/Login/Login";
import SingnUp from "./Registration/signUp/SingnUp";
import Providers from "./Pages/Providers";
import { UserProfile } from "./Pages/UserProfile";
import { EditProfile } from "./Components/UserProfile/EditProfile";
import ProviderDetails from "./Pages/ProviderDetails";
import { UserDataContext } from "./context/userDataContext";
import PageNotFound from "./Pages/PageNotFound";
import PageUnauthorized from "./Pages/PageUnotharized";
import Loader from "./Pages/Loder";

function App() {
  const { isLoggedIn } = useContext(UserDataContext);
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return isLoggedIn === "lodaer" ? (
    <Loader />
  ) : isLoggedIn ? (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/ProviderDetails/:id" element={<ProviderDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Providers" element={<Providers />} />
        <Route path="/SignUp" element={<PageUnauthorized />} />
        <Route path="/Login" element={<PageUnauthorized />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  ) : (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/ProviderDetails/:id" element={<ProviderDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Providers" element={<Providers />} />
        <Route path="/SignUp" element={<SingnUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/userProfile" element={<PageUnauthorized />} />
        <Route path="/editProfile" element={<PageUnauthorized />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
