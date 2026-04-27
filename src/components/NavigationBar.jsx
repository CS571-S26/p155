import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import triviaFactoryLogo from '../assets/TriviaFactoryLogo.png'

function NavigationBar() {
  return (
    <Navbar expand="lg" className="shadow-sm mb-2" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold d-flex align-items-center gap-2">
          <img
            src={triviaFactoryLogo}
            alt="Trivia Factory logo"
            width="140"
            height="56"
            className="d-inline-block align-top"
          />
          Trivia Factory
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
              Suggest
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
