import { Container,  Nav, Navbar } from "react-bootstrap";
const NavigationBar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="md" className="bg-opacity-50 py-3">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">
            LocalSe
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
              <Nav.Link href="/about-us" className="text-white">About Us</Nav.Link>
              <Nav.Link href="/contact-us" className="text-white">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavigationBar;