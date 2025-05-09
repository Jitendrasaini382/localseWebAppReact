import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavigationBar from "../component/Header";
import Footer from "../component/Footer";

const AboutUs = () => {
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

      {/* Hero Section */}
      <Container className="flex-grow-1 d-flex flex-column justify-content-center text-center">
        <Row>
          <Col>
            <h1 className="display-4 fw-bold mb-4">
              About <span className="text-success">LocalSe</span>
            </h1>
            <p className="lead mb-5 opacity-75">
              Connecting customers directly with verified local service providers, 
              emphasizing hyper-locality, trust, and reliability.
            </p>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="g-4 mb-5">
          <Col md={4}>
            <div className="bg-dark bg-opacity-50 p-4 rounded">
              <h3 className="text-success mb-3">Verified Professionals</h3>
              <p className="opacity-75">
                All contractors in our network undergo thorough background 
                checks and verification to ensure your safety and satisfaction.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-dark bg-opacity-50 p-4 rounded">
              <h3 className="text-success mb-3">Quick Matching</h3>
              <p className="opacity-75">
                Our intelligent system connects you with the perfect 
                professionals in your local area within minutes.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-dark bg-opacity-50 p-4 rounded">
              <h3 className="text-success mb-3">Transparent Reviews</h3>
              <p className="opacity-75">
                Access honest, verified reviews from real customers 
                to help you make informed decisions.
              </p>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row>
          <Col>
            <Button
              variant="success"
              size="lg"
              className="rounded-pill px-5"
            >
              Find Your Perfect Service Provider
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;