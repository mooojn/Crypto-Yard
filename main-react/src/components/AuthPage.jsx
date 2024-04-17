import React, { useState } from 'react';


import './styles/AuthPage.css'; 
import Header from './small_components/Header';

function AuthPage() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <>
    
    <Header/>
    <body className='body13'>
        
    
      <div className="container">
        
      <input type="checkbox" id="check" />
      {isLoginFormVisible ? (
        <div className="login form">
          <header>Login</header>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot password?</a>
            <input type="submit" className="button" value="Login" />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?{' '}
              <label htmlFor="check" onClick={toggleForm}>
                Signup
              </label>
            </span>
          </div>
        </div>
      ) : (
        <div className="registration form">
          <header>Signup</header>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Enter your email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Create a password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input type="submit" className="button" value="Signup" />
          </form>
          <div className="signup">
            <span className="signup">
              Already have an account?{' '}
              <label htmlFor="check" onClick={toggleForm}>
                Login
              </label>
            </span>
          </div>
        </div>
      )}
    </div>
    </body>
    </>
  );
}

export default AuthPage;
