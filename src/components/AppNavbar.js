import React, { Component } from 'react'
import { 
  Container,
  NavItem,
  Navbar,
  Nav
} from 'react-bootstrap';
import BotModal from './BotModal';


class AppNavbar extends Component {
  render() {
    return (
      <Navbar 
        collapseOnSelect 
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-5"
      >
        <Container>
          <Navbar.Brand href="/" >Robot Sports League</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavItem>
                <BotModal />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavbar;