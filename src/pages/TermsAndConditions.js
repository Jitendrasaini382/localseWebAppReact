import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../component/Header';
import Footer from '../component/Footer';

const TermsAndConditions = () => {
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

      {/* Terms and Conditions Content */}
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <Row className="w-100">
          <Col lg={10} className="mx-auto">
            <div className="bg-dark bg-opacity-50 rounded-3 p-5 shadow">
              <h1 className="display-6 text-center mb-4">
                <span className="text-success">LocalSe</span> Terms and Conditions
              </h1>
              
              <p className="lead text-center opacity-75 mb-5">
                Operated by Platform LocalSe Private Limited
              </p>
              
              <div className="bg-dark bg-opacity-25 rounded p-4">
                <h3 className="text-success mb-4">Key Terms</h3>
                
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      LocalSe.in serves as a facilitator, connecting customers with contractors. We do not provide, endorse, or guarantee any of the services listed on our platform.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      Customers are responsible for providing accurate information and ensuring their safety when engaging with contractors. Compliance with all applicable laws is required.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      Contractors must deliver services professionally, maintain necessary licenses, and ensure the legality and quality of their work.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      Contractor details, including Aadhaar address and contact number, are displayed for transparency and safety purposes.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      LocalSe.in is not liable for any disputes, damages, or issues between customers and contractors. We encourage resolving disputes directly, though we may assist in mediation.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      We reserve the right to modify these terms, with significant updates communicated to our users.
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

export default TermsAndConditions;