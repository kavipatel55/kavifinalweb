import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Navbar() {
  const navbarWrapper = {
    height: "2rem",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "10rem",
    marginRight: "10rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  };
  const searchArea = {
    display: "flex",
  }
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "10px",
    alignItems: "center",
  };
  return (
    <div className="navbar-wrapper" style={navbarWrapper}>
      <Header />
      <div className="navbar-menu">
        <a href="/Home" className="nav-item" style={linkStyle}>
          Home
        </a>
        <a href="/Home" className="nav-item" style={linkStyle}>
          Contact
        </a>
        <a href="/Home" className="nav-item" style={linkStyle}>
          About
        </a>
        <a href="/Login" className="nav-item" style={linkStyle}>
          Signin
        </a>
      </div>
      <div className="search-area" style={searchArea}>
      
        <InputGroup size="sm" className="mb-3">
          <Form.Control
            aria-label="Small"
            placeholder="what you are looking for ?"
            color="black"
            style={{ width: "15rem", height: "2rem", fontSize: "1rem" }}
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Text id="inputGroup-sizing-sm">🔎</InputGroup.Text>
        </InputGroup>&nbsp;
        <img src="../assets/images/cart.png"/>
      </div>
      
    </div>
  );
}
export default Navbar;
