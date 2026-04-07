import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          Trivia Generator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Welcome & Info
            </Nav.Link>
            <Nav.Link as={NavLink} to="/answer">
              Answer Questions
            </Nav.Link>
            <Nav.Link as={NavLink} to="/workshop">
              Workshop
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
