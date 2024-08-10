import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
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
              {username}
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
      <input
              type="text"
              placeholder="Search..."
              className="search-input"
              required
            />
            <div style={{display:"flex",marginLeft:"15px",marginTop:"10px",gap:"10px"}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faUser} />
            </div>
        
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Navbar;
