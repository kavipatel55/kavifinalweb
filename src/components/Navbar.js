import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Navbar() {
  const checkuserState = !!localStorage.getItem('username');
  const username = checkuserState ? localStorage.getItem('username') : '';
  const handleLogout = () => {
    localStorage.removeItem('username');
    
    window.location.href='/Login';
  };

  const navbarWrapper = {
    height: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '10rem',
    marginRight: '10rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  };

  const searchArea = {
    display: 'flex',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    margin: '10px',
    alignItems: 'center',
  };

  return (
    <div className="navbar-wrapper" style={navbarWrapper}>
      <Header />
      <div className="navbar-menu">
        <Link to="/" className="nav-item" style={linkStyle}>Home</Link>
        <Link to="/Contact" className="nav-item" style={linkStyle}>Contact</Link>
        <Link to="/About" className="nav-item" style={linkStyle}>About</Link>
        {checkuserState ? (
          <>
            <Link to="/Profile" className="nav-item" style={linkStyle}>
              {'👤 ' + username}
            </Link>
            <a className="nav-item" style={linkStyle} onClick={handleLogout}>
              Logout
            </a>
          </>
        ) : (
          <Link to="/Login" className="nav-item" style={linkStyle}>Sign In</Link>
        )}
      </div>
      <div className="search-area" style={searchArea}>
        <InputGroup size="sm" className="mb-3">
          <Form.Control
            aria-label="Small"
            placeholder="What are you looking for?"
            style={{ width: '15rem', height: '2rem', fontSize: '1rem' }}
          />
          <InputGroup.Text id="inputGroup-sizing-sm">🔎</InputGroup.Text>
        </InputGroup>&nbsp;
        <img src="../assets/images/cart.png" alt="Cart" />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Navbar;
