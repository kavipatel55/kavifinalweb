import React from 'react';
import './auth.css'; 

function Registration() {
  const register = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const newUser = {
      email: formdata.get('user_email'),
      password: formdata.get('user_password'),
    };

    if (newUser.email && newUser.password) {
      try {
        const response = await fetch("http://localhost:3131/api/users/register", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
        
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('username', newUser.email);
          alert('Your account is created please login');
          window.location.href = '/Login';
        } else {
          alert(data.error || 'Registration failed');
        }
      } catch (err) {
        console.error('Error:', err);
        alert('An error occurred while registering');
      }
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
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              id="user_password"
              name="user_password"
              placeholder="Password"
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
