import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MSeo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/ExpEdu">
              Exp/Edu
            </Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://japanime.herokuapp.com/"
                target="_blank"
              >
                Project 1 - Japanime
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="proj2">
                Project 2 - ghibli
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="proj3">
                Project 3 - todo list
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://pokemondictionary.herokuapp.com/"
              >
                Proejct 4 - Pokemon
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Board">
              Board
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
