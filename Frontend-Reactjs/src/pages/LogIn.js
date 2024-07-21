import BackgroundFrame from "../components/BackgroundFrame";
import "./LogIn.css";
import axios from 'axios';
import { useState } from 'react';

const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    // setIsEmailValid(true);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    // setIsPasswordValid(true);
  };









  
  const handleSubmit = (e) => {
    e.preventDefault();
   
      // Send the form data to the server
      console.log("Form submitted");
      alert("Form submitted");
      axios.post(`http://stupid-actors-stand.loca.lt/v1/login`, {
        Email: email,
        Password: password,
        // userName: userName,
        // phoneNumber: phoneNumber,
      })
      .then(response => {
        console.log(response.data);
        alert("Login successful");
     
  })
  .catch((err) =>{
    console.log(err);
    console.log(err.response.data);
    alert("Login failed");
    
  })
  // const validatePassword = (password) => {
  //   // Regular expressions for password validation
  //   const uppercaseRegex = /[A-Z]/;
  //   const lowercaseRegex = /[a-z]/;
  //   const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  //   const numberRegex = /[0-9]/;

    // Check if password meets all criteria
    return (
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      specialCharRegex.test(password) &&
      numberRegex.test(password)
    );
  }

  return (
    <div className="log-in">
      <div className="frame-login">
        <div className="frame-content">
          <header className="frame-localhood">
          <img className="logo-icon" alt="" src="/logo.png" />
            <div className="frame-localhood-child" />
            <h2 className="e-localhood"></h2>
          </header>
          <div className="frame-social-login">
              {/* <div className="frame-email-mobile"> */}
              {/* </div> */}

            <form onSubmit={handleSubmit}>
              <h1 className="login-to-your">Login to Your Account</h1>
              <div className="frame-button">
                <b className="login-using-social">
                  Login using social networks
                </b>
                <div className="frame-input-group">
                  <div className="input-password">
                    <div className="frames-loading-ellipse">
                      <div className="ellipse-a" />
                      <b className="f">f</b>
                    </div>
                    <div className="frames-loading-ellipse1">
                      <div className="frames-loading-ellipse-child" />
                      <b className="g">G+</b>
                    </div>
                    <div className="frames-loading-ellipse2">
                      <div className="frames-loading-ellipse-item" />
                      <b className="y">Y</b>
                    </div>
                  </div>
                  <div className="frame-o-r">
                    <div className="rectangle-divider" />
                    <b className="or">OR</b>
                    <div className="rectangle-divider1" />
                  </div>
                  <input
                    className="frame-email-mobile-input"
                    placeholder="Email /Mobile no"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                 
                  />
                  <input
                    className="frame-email-mobile-input1"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    // onSubmit={validatePassword}
                    
                  />
                </div>
              </div>




















              <div className="signup-container">
                <button  onClick={handleSubmit} className="login-button">
                  <div className="login-button-child" />
                  <b className="signin">Sign in</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BackgroundFrame />
    </div>
  );
};

export default LogIn;
