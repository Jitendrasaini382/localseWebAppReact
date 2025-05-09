import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../component/Header';
import Footer from '../component/Footer';

const Disclaimer = () => {
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

      {/* Disclaimer Content */}
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <Row className="w-100">
          <Col lg={10} className="mx-auto">
            <div className="bg-dark bg-opacity-50 rounded-3 p-5 shadow">
              <h1 className="display-6 text-center mb-4">
                <span className="text-success">LocalSe</span> Disclaimer
              </h1>
              
              <p className="lead text-center opacity-75 mb-5">
                Important Information for Platform Users
              </p>
              
              <div className="bg-dark bg-opacity-25 rounded p-4">
                <h3 className="text-success mb-4">Key Points</h3>
                
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      LocalSe.in does not offer or manage services directly. We provide a platform to connect customers and contractors.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      We do not endorse or guarantee contractor services. Users are responsible for any risks associated with contractor engagements.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="text-success me-3">•</span>
                    <span className="opacity-75">
                      LocalSe.in is not responsible for any disputes, damages, or losses resulting from service engagements. Users agree to accept these risks when using the platform.
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

export default Disclaimer;