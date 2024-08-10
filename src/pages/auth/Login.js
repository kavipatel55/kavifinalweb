import React from 'react';
import './auth.css'; 

function Login() {
  const login = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const userCred = {
      user_id: formdata.get('user_id'),
      user_password: formdata.get('user_password'),
    };

    if (userCred.user_id && userCred.user_password) {
      localStorage.setItem('username', userCred.user_id);
      if(userCred.user_id=="admin@gmail.com" && userCred.user_password == "1234"){
        window.location.href = "/Add";
      }else{
      window.location.href = "/";
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
              <a href="#" className='forgot-pass'>Forget Password</a>
            </div>
            <a href='/Signup' className='login_acc'>Dont Have an Account</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
