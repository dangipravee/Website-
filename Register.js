import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirm: ""
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation (alphabets only)
    const namePattern = /^[A-Za-z ]+$/;

    // Email validation (alphabet gmail only)
    const emailPattern = /^[a-zA-Z._]+@gmail\.com$/;

    // Mobile validation
    const mobilePattern = /^[0-9]{10}$/;

    if (!namePattern.test(form.name)) {
      setError("Name must contain only alphabets");
      return;
    }

    if (!emailPattern.test(form.email)) {
      setError("Email must contain only alphabets and end with @gmail.com");
      return;
    }

    if (!mobilePattern.test(form.mobile)) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Registration Successful!");
  };

  return (
    <div className="form-container">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="email"
          placeholder="Email (alphabet gmail only)"
          value={form.email}
          onChange={handleChange}
          required
        />

       <input
  type="text"
  name="mobile"
  placeholder="Mobile Number"
  value={form.mobile}
  maxLength="10"
  onChange={(e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setForm({ ...form, mobile: value });
    }
  }}
  required
/>

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            type="button"
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>

        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>

      </form>

    </div>
  );
}

export default Register;
