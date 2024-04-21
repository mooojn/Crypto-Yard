import React, { useState } from 'react';

import { Link,useNavigate } from 'react-router-dom';

import './styles/AuthPage.css';
import Header from './small_components/Header';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AuthPage() {
  const navigate = useNavigate();
  const API_URL = "http://localhost:5056/api"


  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [signUpName, setSignupname] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [cnic, setcnic] = useState('');

  const handleLogin = (e) => {

    e.preventDefault();
    if (name == "" || password == "") {
      toast.error("Please fill all the fields");
      return;
    }
    // Make the HTTP GET request to your ASP.NET Web API endpoint
    axios.get(API_URL + '/login', {
      params: {
        Name: name,
        Password: password
      },
    })
      .then(response => {
        if (response.data) {
          toast.success('Authentication successful');
          // navigate('/home')

        } else {
          toast.error("Incorrect username or password");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error occurred. See console for details.');
      });
  };


  const handleSignup = (e) => {
    e.preventDefault();
    
    // validation
    const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
    const nameRegex = /^.{3,}$/; // Regex for at least 3 characters
    const passRegex = /^.{6,}$/; // Regex for at least 6 characters

     if (signUpName == "" || signUpPassword == "" || cnic == "") {
      toast.warning("Please fill all the fields");
      return;
    }
    else if (!nameRegex.test(signUpName)) {
      toast.warning("Name must have at least 3 characters");
      return;
    }
    else if (!cnicRegex.test(cnic)) {
      toast.warning("Please provide a valid CNIC number");
      return;
    }
    else if (!passRegex.test(signUpPassword)) {
      toast.warning("Password must have at least 6 characters");
      return;
    }
    
    // Make the HTTP GET request to your ASP.NET Web API endpoint
    axios.get(API_URL + '/signUp', {
      params: {
        Name: signUpName,
        Password: signUpPassword,
        Cnic: cnic
      }
    })
      .then(response => {
        console.log('Response:', response);
        if (response.data) {
          // Signup successful
          toast.success("Sign-Up was successful");
        } else {
          // Signup failed
          toast.warning("User already exists")
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error occurred. See console for details.');
      });
  };

  const handleCNICInputChange = (e) => {
    let input = e.target.value.replace(/\D/g, '').substring(0, 13); // Remove non-numeric characters and limit to 13 digits
    let formattedInput = '';
    
    // Add hyphen after every 5th character and 7th character
    for (let i = 0; i < input.length; i++) {
      if (i === 5 || i === 12) {
        formattedInput += '-';
      }
      formattedInput += input[i];
    }
    
    setcnic(formattedInput);
  };
  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <>

      <Header />
      <body className='body13'>


        <div className="container">

          <input type="checkbox" id="check" />
          {isLoginFormVisible ? (
            <div className="login form">
              <header>Login</header>
              <form onSubmit={handleLogin}>
                <ToastContainer />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <a href="#">Forgot password?</a> */}
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
                  placeholder="Enter your name"
                  value={signUpName}
                  onChange={(e) => setSignupname(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter your CNIC"
                  value={cnic}
                  onChange={handleCNICInputChange}
                  />
                <input
                  type="password"
                  placeholder="Create a password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
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
