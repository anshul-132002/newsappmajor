import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSignUp = () => {
    // Navigate to the registration page or route where users can sign up
    navigate("/SignupForm");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    console.log("Password:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/All");
  };

  return (
    <div className="login-container">
      <h1>NEWSAPP</h1>
      <img
        src="https://w7.pngwing.com/pngs/329/338/png-transparent-breaking-news-text-overlay-breaking-news-newspaper-logo-exercise-breaking-news-text-banner-news.png"
        alt="News Image"
        width="200"
      />
      <br></br>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="new" type="submit">
            Login
          </button>
          <p className="signup-link" onClick={handleSignUp}>
            Don't have an account? Sign Up </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
