import React, { useState } from 'react';
import Navbar from './NavBar';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "phone") {
      setPhone(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "" || password === "") {
      alert("Please enter your details");
      return;
    }

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    let getDetails = JSON.parse(localStorage.getItem("user")) || [];

    // Find user with matching credentials
    const matchedUser = getDetails.find(user => user.phone === phone && user.password === password);

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser)); // Save logged-in user
      alert("Login Successful!");
      navigate("/home");
    } else {
      setMsg("Invalid phone number or password!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className='lForm'>
        <p className='errMsg'>{msg}</p>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='heading'>
            <p>Log In</p>
          </div>
          <div className='account'>
            <input
              type='tel'
              name='phone'
              placeholder='Enter your Phone Number'
              onChange={handleInput}
              pattern='[0-9]{10}'
              maxLength='10'
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Enter your Password'
              onChange={handleInput}
              required
            />
            <p><Link to='/forgotpassword'>Forgot Password?</Link></p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button>Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
