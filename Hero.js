import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">

      <h1>Welcome to MyCompany</h1>

      <p>
        Build amazing applications with our modern platform.
      </p>

      <div className="hero-buttons">
        <Link to="/register">
          <button>Register</button>
        </Link>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>

    </div>
  );
}

export default Hero;