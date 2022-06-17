import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from "./pictures/github.png";
import linkedin from "./pictures/linkedin.png";

const NavbarComp = () => {
  let githubLink = "https://github.com/rongjuni";
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🏚️
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>

            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://findpokemon.vercel.app//"
              >
                Pokemon (React)
              </NavDropdown.Item>

              <NavDropdown.Item
                href="http://japanime.vercel.app"
                target="_blank"
              >
                Japanime (React)
              </NavDropdown.Item>

              <NavDropdown.Item
                target="_blank"
                href="https://momorykornum.vercel.app/"
              >
                Memory Game (React)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/wip">
                FootRockers (Coming Soon)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/wip">
                Nuel Express (Coming Soon)
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Board">
              Board
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <a href={githubLink} target="blank" style={{ marginRight: "1rem" }}>
            <img src={github} width="30rem" alt="githubicon"></img>
          </a>

          <a
            href="https://www.linkedin.com/in/matthew-seo-cpa-mba-71349bb9/"
            target="blank"
          >
            <img src={linkedin} width="30rem" alt="githubicon" />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
