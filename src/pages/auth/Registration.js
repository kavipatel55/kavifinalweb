import React from 'react';
import './auth.css'; 

function Registration() {
  const register = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const newUser = {
     
      user_password: formdata.get('user_password'),
      user_name: formdata.get('user_name'),
      user_email: formdata.get('user_email'),
    };

    if ( newUser.user_password && newUser.user_name && newUser.user_email ) {
      
      localStorage.setItem('username', newUser.user_email);
      window.location.href = '/';
    } else {
      
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-banner">
        <img src="../assets/images/login_banner.png" className="login-banner-img" alt="Register Banner" />
      </div>
      <div className="login-intro">
        <div>
          <h3>Register for PrimePicks</h3>
          <p>Enter your details below</p>
        </div>
        <div className="login-form">
          <form onSubmit={register}>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Full Name"
              required
            />
            <input
              type="password"
              id="user_password"
              name="user_password"
              placeholder="Password"
              required
            />
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Email"
              required
            />
           
            <div className="login-action">
              <button type="submit" className="buy-btn">Register</button>
              <a href="/Login" className='login_acc'>Already have an account? Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
