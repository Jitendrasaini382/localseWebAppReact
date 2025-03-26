import React from "react";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
const Footer = () => {
    return (
      <footer className="bg-dark bg-opacity-50 text-center py-4">
        <Container>
          <p className="mb-2 small">
            Platform Localse Private Limited
            <br />
            Registered Address: G-39, Vardhman Grand Market, Dwarka, New Delhi
          </p>
          <p className="mb-2">
            Contact: <a href="mailto:awareness@localse.in" className="text-info">awareness@localse.in</a>
          </p>
          <div className="d-flex justify-content-center gap-3 mb-2">
            <a href="/terms" className="text-info text-decoration-none">Terms & Conditions</a>
            <a href="/privacy" className="text-info text-decoration-none">Privacy Policy</a>
            <a href="/disclaimer" className="text-info text-decoration-none">Disclaimer</a>
          </div>
          <p className="small">© 2025 Platform Localse Private Limited. All Rights Reserved</p>
        </Container>
      </footer>
    );
  };
  export default Footer;