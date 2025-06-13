import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/Contactus";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/Policy";
import Disclaimer from "./pages/Disclaier";
import WhatsappRedirect from "./pages/WhatsappRedirect"; // 👈 You'll create this
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/blogs" element={<Blogs />} /> {/* 👈 new route */}
        <Route path="/blog_detail" element={<BlogDetail/>} />
        <Route path="/download_app" element={<WhatsappRedirect />} /> {/* 👈 new route */}
      </Routes>
    </Router>
  );
}

export default App;
