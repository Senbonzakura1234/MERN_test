import React from 'react';
// eslint-disable-next-line
import {
  Navbar, Form, FormControl, Nav, Button, Container
  } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <div>
      <Navbar variant="light" bg="custom-shark" expand="sm">
        <Container fluid>
          <Navbar.Brand className="text-white" href="/">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="text-white" href="https://github.com/Senbonzakura1234/MERN_test">
                GitHub
              </Nav.Link>
            </Nav>
            <Form inline className="my-2 my-lg-0 mr-md-3 mr-lg-5 searchTopform searchForm">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                  name="searchQuery" id="searchQuery"/>
              <Button variant="light" className="my-2 my-sm-0 nav-button d-lg-none">
                Search
              </Button>
            </Form>
            <Button variant="outline-light" className="mb-2 mb-md-0 mr-md-1 text-center
                mr-lg-2 nav-button">
                  Login
            </Button>
            <Button variant="outline-light" className="text-center nav-button">
              Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar color="custom-dark-purple" dark expand="sm" className="mb-5 px-lg-5">
        <NavbarBrand href="/">Shopping List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/Senbonzakura1234/MERN_test">GitHub</NavLink>
            </NavItem>
          </Nav>
          <Form inline className="my-2 my-lg-0 mr-md-3 mr-lg-5 searchTopform searchForm">
              <Input className="mr-sm-2" type="text" name="searchQuery"
                id="searchQuery"placeholder="Search" />
              <Button color="light" className="my-2 my-sm-0 nav-button d-lg-none">Search</Button>
          </Form>
          <Button outline color="light" className="mb-2 mb-md-0 mr-md-1 text-center
               mr-lg-2 nav-button">
                 Login
          </Button>
          <Button outline color="light" className="text-center nav-button">
            Register
          </Button>
        </Collapse>
      </Navbar> */}
    </div>
  );
}


export default NavbarComp;