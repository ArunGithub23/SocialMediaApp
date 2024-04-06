import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
//import {Link} from 'react-router-dom'

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>explore the idea</h6>
        </div>
      </div>

      <Login />
    </div>
  );
};

//Login

function Login() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Login</h3>
          <div>
            <input
              type="text"
              placeholder="Useranme"
              className="infoInput"
              name="firstname"
            />
            <input
              type="Password"
              placeholder="Passwoed.."
              className="infoInput"
              name="lastname"
            />
          </div>
          
          <div>      
                <span>Do not have an account? Signup </span>
          </div>
          <button className="button infoButton">SignUp</button>
        </form>
      </div>
    );
  }
  



//Signup

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="firstname"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>      
              <span>Already have an account? Login </span>
        </div>
        <button className="button infoButton">SignUp</button>
      </form>
    </div>
  );
}

export default Auth;
