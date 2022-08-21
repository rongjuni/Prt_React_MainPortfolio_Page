import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import github from "./pictures/github.png";
import linkedin from "./pictures/linkedin.png";

const NavbarComp = () => {
  let [mode, setMode] = useState("light");

  return (
    <Navbar
      className="navbar-customize"
      // bg={mode}
      // variant={mode}
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          🏚️
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/about"> */}
            {/* About Me */}
            {/* </Nav.Link> */}

            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://foot-rockers.vercel.app/">
                FootRockers (React)
              </NavDropdown.Item>

              <NavDropdown.Item
                target="_blank"
                href="https://deploygossip.ue.r.appspot.com"
              >
                GossipCOM (NodeJS)
              </NavDropdown.Item>

              <NavDropdown.Item
                target="_blank"
                href="https://findpokemon.vercel.app"
              >
                Pokemon (React)
              </NavDropdown.Item>

              <NavDropdown.Item
                href="http://japanime.vercel.app"
                target="_blank"
              >
                Japanime (React)
              </NavDropdown.Item>

              {/* <NavDropdown.Item
                target="_blank"
                href="http://numbermemorygame.herokuapp.com"
              >
                Memory Game (React)
              </NavDropdown.Item> */}

              {/* <NavDropdown.Item as={Link} to="/wip">
                Nuel Express (Coming Soon)
              </NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link as={Link} to="/Board">
              Board
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <div>
          <span className="navbar-icon-margin">
            <a href="https://github.com/rongjuni" target="blank">
              <img width="40rem" src={github} alt="github_icon" />
            </a>
          </span>
          <span>
            <a href="https://linkedin.com/in/mattseodev" target="blank">
              <img width="40rem" src={linkedin} alt="linkedin_icon" />
            </a>
          </span>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
