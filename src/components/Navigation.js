import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Navigation.css';

export default function Navigation() {
  return (
    <Navbar bg="dark" fixed="top" className="navbar__transparent">
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Topics" id="basic-nav-dropdown">
          <NavDropdown.Item href="/articles/topic/cooking">Cooking</NavDropdown.Item>
          <NavDropdown.Item href="/articles/topic/coding">Coding</NavDropdown.Item>
          <NavDropdown.Item href="/articles/topic/football">Football</NavDropdown.Item>
        </NavDropdown>
    </Navbar>
  );
}
