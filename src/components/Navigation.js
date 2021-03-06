import {Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Navigation.css';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { login } from "../utils/login";

export default function Navigation() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
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
        
        <Form className="d-flex">
        
        {loggedInUser ? (
          
        <Button className="navbar__transparent__button"
          onClick={() => {
            setLoggedInUser(null);
          }}
        >
          Logout
        </Button>
        
      ) : (
        
        <Button className="navbar__transparent__button"
          onClick={async () => {
            const user = await login();
            setLoggedInUser(user);
            console.log(user);
          }}
        >
          Login
        </Button>
      )}
      
       
      </Form>
      
    </Navbar>
  );
}
