import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Layout/navbar/Navbar';
import Footer from './Layout/footer/Footer';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ContactUs from './Pages/ContactUs';
import Login from './Registration/Login/Login';
import SingnUp from './Registration/signUp/SingnUp';


function App() {
  return (
 <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/aboutPage" element={<AboutPage />} />
  {/* <Route path="/products" element={<Products />} /> */}
  <Route path="/contactus" element={<ContactUs />} />
  {/* <Route path="/prodect" element={<Prodect />} /> */}
  {/* <Route path="/Checkout" element={<Checkout />} /> */}
  <Route path="/SignUp" element={<SingnUp />} />
  <Route path="/Login" element={<Login />} />
</Routes>
<Footer/> 
</>
    
  );
}

export default App;
