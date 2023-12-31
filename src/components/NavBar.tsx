import React, { CSSProperties, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar: React.FC = () => {
  const links = ["Home", "Experience", "Projects", "Education"];
  const location = useLocation();

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#08233d" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map((item, index) => (
            <Nav.Link
              as={Link}
              to={"/" + item}
              key={index}
              style={{ paddingLeft: "10px" }}
              className={location.pathname === "/" + item ? "active" : ""}
            >
              {item}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
