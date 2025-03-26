import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavigationBar from '../component/Header';
import Footer from '../component/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
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

      {/* Contact Section */}
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <Row className="w-100">
          <Col lg={10} className="mx-auto">
            <div className="bg-dark bg-opacity-50 rounded-3 overflow-hidden shadow">
              <Row>
                {/* Contact Info */}
                <Col md={5} className="p-5 bg-dark bg-opacity-75">
                  <h1 className="display-6 fw-bold mb-4">
                    Get in <span className="text-success">Touch</span>
                  </h1>
                  <p className="lead opacity-75 mb-5">
                    We'd love to hear from you! Send us a message and we'll respond as soon as possible.
                  </p>

                  <div className="mb-4 d-flex align-items-center">
                    <div 
                      className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '50px', height: '50px' }}
                    >
                      ✉️
                    </div>
                    <div>
                      <h3 className="h5 mb-1 text-success">Email Us</h3>
                      <p className="opacity-75 mb-0">awareness@localse.in</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3" 
                      style={{ width: '50px', height: '50px' }}
                    >
                      ⏱️
                    </div>
                    <div>
                      <h3 className="h5 mb-1 text-success">Response Time</h3>
                      <p className="opacity-75 mb-0">Within 24 hours</p>
                    </div>
                  </div>
                </Col>

                {/* Contact Form */}
                <Col md={7} className="p-5">
                  <h2 className="mb-4 display-6">Send a Message</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        className="bg-dark text-white border-secondary"
                      />
                    </Form.Group>

                    <Button 
                      variant="success" 
                      type="submit" 
                      className="rounded-pill px-5 py-2 fw-bold"
                    >
                      Send Message
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;