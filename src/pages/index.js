import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";
import NavigationBar from "../component/Header";
import Footer from "../component/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPlatformPopupOpen, setPlatformPopupOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleUserTypeSelect = (type) => {
    setSelectedUserType(type);
    setPopupOpen(false);
    setPlatformPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setPlatformPopupOpen(false);
    setSelectedUserType(null);
  };

  const handlePlatformDownload = (platform) => {
    window.location.href = `/download-apps?platform=${platform}`;
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        background: "linear-gradient(to right, #1f2937, #ef4444)",
        color: "white",
      }}
    >
      {/* Header */}
      <NavigationBar />

      {/* Main Content */}
      <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
        <Row>
          <Col>
            <h1 className="display-4 fw-bold mb-4">
              Discover Local Services with{" "}
              <span className="text-success">Localse</span>
            </h1>
            <p className="lead mb-5 opacity-75">
              Connect with trusted local service providers in just a few clicks.
            </p>
            <Button
              variant="outline-light"
              size="lg"
              className="rounded-pill px-5"
              onClick={() => setPopupOpen(true)}
            >
              Explore Localse
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
     <Footer/>

      {/* First Popup */}
      <Modal show={isPopupOpen} onHide={closePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Localse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-grid gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleUserTypeSelect("Customer")}
            >
              Customer
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleUserTypeSelect("Partner")}
            >
              Partner
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleUserTypeSelect("Agent")}
            >
              Agent
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Platform Download Popup */}
      <Modal show={isPlatformPopupOpen} onHide={closePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download {selectedUserType} Platform</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-grid gap-3">
            <Button
              variant="info"
              size="lg"
              onClick={() => handlePlatformDownload("ios")}
            >
              Download for iOS
            </Button>
            <Button
              variant="info"
              size="lg"
              onClick={() => handlePlatformDownload("android")}
            >
              Download for Android
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HomePage;
