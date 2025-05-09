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
  const [isDownloadPopupOpen, setDownloadPopupOpen] = useState(false);

  const closePopup = () => {
    setDownloadPopupOpen(false);
  };

  const handlePlatformDownload = (platform) => {
    if (platform === "android") {
      window.location.href = "https://play.google.com/store/apps/details?id=com.localse";
    } else if (platform === "ios") {
      window.location.href = "https://apps.apple.com/in/app/localse/id6743470526";
    }
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
              onClick={() => setDownloadPopupOpen(true)}
            >
              Explore Localse
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />

      {/* Download Platform Popup */}
      <Modal show={isDownloadPopupOpen} onHide={closePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download Localse</Modal.Title>
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