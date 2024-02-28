import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../../Component/Assets/person.png'
import email_icon from '../../Component/Assets/email.png'
import password_icon from '../../Component/Assets/password.png'
import axios from 'axios';

export const LoginSignup = () => {

    const [action, setaction]= useState("Sign Up");
    const [formData, setFormData]= useState({
        name:"",
        email:"",
        password:""

    });

    const handleChange=(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit=async()=>{
    try{
        const response = await axios.post('link', formData);
        console.log(response.data);
    } catch(error){
        console.error('Error:',error);

    }
    };


    return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        <div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' onChange={handleChange} />
            </div>}
            
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
            </div>
            {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click here!</span> </div>
            }
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login");{handleSubmit};}}>Login</div> 
            </div>
            </div>
        </div>
    </div>
  )
}
