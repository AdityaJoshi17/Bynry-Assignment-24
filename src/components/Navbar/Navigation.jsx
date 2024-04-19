import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import './Navigation.css';
function Navigation() {
  return (
    <Navbar expand="lg" className="bg-dark py-3 px-4">
      <Container fluid>
        <Navbar.Brand href="#">Geoprofiler Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar-dark" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex mb-2 mb-lg-0">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Profiles</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Login ">
                logout
            </Nav.Link>
            
          </Nav>
          
      
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;