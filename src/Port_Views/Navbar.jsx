import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Matt Seo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>

            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://japanime.herokuapp.com/"
                target="_blank"
              >
                Japanime
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="proj2">
                Project 2 - Nuel Express (WIP)
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="proj3">
                Project 3 - todo list (WIP)
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://pokemondictionary.herokuapp.com/"
              >
                Pokemon
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
