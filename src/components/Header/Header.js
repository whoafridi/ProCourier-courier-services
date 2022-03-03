import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            ProCourier
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                About us
              </Nav.Link>
              {user?.email ? (
                <>
                  <Nav.Link as={Link} to="/addservice">
                    Add Service
                  </Nav.Link>
                  <Nav.Link as={Link} to="/mybooked">
                    My Booked
                  </Nav.Link>
                  <Nav.Link as={Link} to="/managebooked">
                    Manage Booked
                  </Nav.Link>
                  <Navbar.Text className="mr-2">
                    {user?.displayName}
                  </Navbar.Text>
                  <Button onClick={logOut} variant="light">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/registration">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login{" "}
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
