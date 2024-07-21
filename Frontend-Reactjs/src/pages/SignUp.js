import FrameComponent4 from "../components/FrameComponent4";
import { useState } from 'react';
import axios from 'axios';
import "./SignUp.css";

const SignUp = () => {

  // Define state variables for form inputs
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    console.log(e.target.value);  
    setName(e.target.value);
  }


  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }


  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   
      // Send the form data to the server
      console.log("Form submitted");
      alert("Form submitted");
      axios.post(`http://cuddly-bats-double.loca.lt/v1/signup`, {
        Email: email,
        Password: password,
        Name: userName,
        PhoneNumber: phoneNumber,
      })
      .then(response => {
        console.log(response.data);
        alert("account created successful");
     
  })
  .catch((err) =>{
    console.log(err);
    console.log(err.response.data);
    alert("sign up failed");
    
  })








  return (
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    specialCharRegex.test(password) &&
    numberRegex.test(password)
  );
}

  return (
    <div className="sign-up">
      <FrameComponent4 />
        <div className="sign-up-with" />
        <div className="sign-up-child" />
        <div className="sign-up-item" />
        <div className="sign-up-inner">
          <div className="o-r-parent">
            <div className="o-r">
              <div className="o-r-child" />
              <div className="o-r-item" />
              <div className="o-r-inner" />
            </div>
      <form onSubmit={handleSubmit}>
            <div className="mobile-no">
              <div className="email-input">
                <div className="sign-in-button">
                  <h1 className="create-free-account">Create Free Account</h1>
                </div>
                <div className="create-account-label">
                  <b className="sign-up-using">Sign up using social networks</b>
                </div>
                <div className="first-last-name-fields">
                  <div className="mobile-number-field">
                    <div className="email-field">
                      <div className="password-field">
                        <div className="terms-checkbox" />
                        <b className="f1">f</b>
                      </div>
                      <div className="password-field1">
                        <div className="password-field-child" />
                        <b className="g1">G+</b>
                      </div>
                      <div className="password-field2">
                        <div className="password-field-item" />
                        <b className="y1">Y</b>
                      </div>
                    </div>
                    <div className="o-r-text-parent">
                      <div className="o-r-text" />
                      <b className="or1">OR</b>
                      <div className="o-r-text1" />
                    </div>
                  </div>
                  <div className="contact-info-fields">
                    <div className="main-form">
                      <input
                        className="input-field-group"
                        placeholder={`First & Last Name`}
                        type="text"
                        value={userName}
                        onChange={handleUsername}
                      />
                      <input
                        className="register-button"
                        placeholder="Mobile no"
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                      />
                    </div>
                    <div className="main-form1">
                      <input
                        className="main-form-child"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={handleEmail}
                      />
                      <input
                        className="main-form-child"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                      />
                    </div>
                  </div>
                </div>
                <div className="sign-up-confirmation-message">
                  <input className="confirmation-frame1" type="checkbox" />
                  <b className="i-have-read">I have read the Terms & Conditions</b>
                </div>
                <div className="input-fields">
                  <button type="submit" className="submit-btn">
                    <div className="submit-btn-child" />
                    <b className="sign-up1">Sign up</b>
                  </button>
                </div>
              </div>
            </div>
      </form>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
