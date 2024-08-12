import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Navbar() {
  const checkuserState = !!localStorage.getItem('username');
  const username = checkuserState ? localStorage.getItem('username') : '';
  const handleLogout = async () => {
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    window.location.href = '/';
    // try {
    //   const authToken = localStorage.getItem('authToken');
    
    //   const response = await fetch("http://localhost:3131/api/users/logout", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     credentials: 'include',
    //     body: JSON.stringify({authToken: authToken})
    //   });
     
    //   if (response.ok) {
    //     // Clear localStorage items related to user authentication
    //     localStorage.removeItem('username');
    //     localStorage.removeItem('authToken');
    //     localStorage.removeItem('userId');
    
    //     window.location.href = '/Login'; // Redirect to the login page
    //   } else {
    //     const data = await response.json();
    //     alert(data.error || 'Logout failed');
    //   }
    // } catch (err) {
    //   console.error('Error:', err);
    //   alert('An error occurred while logging out');
    // }
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
        <Link to="/Cart" className="nav-item" style={linkStyle}>Cart</Link>
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
            
        
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Navbar;
