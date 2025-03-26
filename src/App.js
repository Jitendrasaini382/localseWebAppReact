import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/Contactus";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/Policy";
import Disclaimer from "./pages/Disclaier";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/disclaimer" element={<Disclaimer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
