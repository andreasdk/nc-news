import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Navigation.css';

export default function Navigation() {
  return (
    <Navbar bg="dark" fixed="top" className="navbar__transparent">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
    </Navbar>
  );
}
