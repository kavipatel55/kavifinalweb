import React from 'react';
import './auth.css'; 

function Login() {
  const login = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const userCred = {
      email: formdata.get('user_id'),
      password: formdata.get('user_password'),
    };

    if (userCred.email && userCred.password) {
      if(userCred.email === "admin@gmail.com" && userCred.password === "1234"){
        localStorage.setItem('username', userCred.email);
        window.location.href = "/Add";
      }else{
        try {
          const response = await fetch("http://localhost:3131/api/users/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCred)
          });
          const data = await response.json();
          if (response.ok) {
            localStorage.setItem('username', userCred.email);
            localStorage.setItem('authToken', data.authToken);
            window.location.href = '/';
          } else {
            alert(data.error || 'Please check your credentials');
          }
        } catch (err) {
          console.error('Error:', err);
          alert('An error occurred while logging in');
        }
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-banner">
        <img src="../assets/images/login_banner.png" className="login-banner-img" alt="Login Banner" />
      </div>
      <div className="login-intro">
        <div>
          <h3>Log in to PrimePicks</h3>
          <p>Enter your details below</p>
        </div>
        <div className="login-form">
          <form onSubmit={login}>
            <input
              type="text"
              id="user_id"
              name="user_id"
              placeholder="Enter Your Email"
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
              <button type="submit" className="buy-btn">Login</button>
              <a href="#" className='forgot-pass'>Forgot Password</a>
            </div>
            <a href='/Signup' className='login_acc'>Don't Have an Account</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
