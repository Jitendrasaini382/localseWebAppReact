import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../component/Header';
import Footer from '../component/Footer';

const PrivacyPolicy = () => {
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

      {/* Privacy Policy Content */}
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <Row className="w-100">
          <Col lg={10} className="mx-auto">
            <div className="bg-dark bg-opacity-50 rounded-3 p-5 shadow">
              <h1 className="display-6 text-center mb-4">
                <span className="text-success">Localse</span> Privacy Policy
              </h1>
              
              <p className="lead text-center opacity-75 mb-5">
                How We Handle and Protect Your Data
              </p>
              
              <div className="bg-dark bg-opacity-25 rounded p-4">
                <h3 className="text-success mb-4">Key Privacy Principles</h3>
                
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      We collect personal information such as names, contact details, booking history, and location to improve user experience and facilitate service connections.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      Data may be shared with contractors for booking fulfillment and with third parties for operational needs, including SMS services, WhatsApp services, server management, payment processing, and Google APIs.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      We have implemented robust security measures to protect user data and conduct regular reviews to maintain safety.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      Users have the right to access, update, or delete their data and can opt out of marketing communications at any time.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      Cookies are used to enhance the user experience. Users can manage cookie preferences in their browser settings.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;