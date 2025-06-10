import React, { useState } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const userDetail = {
    name: "",
    phone: "",
    password: ""
  };
  const [data, setData] = useState(userDetail);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phonePattern = /^[0-9]{10}$/;

    if (data.name === "" || data.phone === "" || data.password === "") {
      alert("Please fill all fields!");
      return;
    }

    if (!phonePattern.test(data.phone)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    // Save to localStorage
    const getData = JSON.parse(localStorage.getItem("user")) || [];
    const arr = [...getData];
    arr.push(data);
    localStorage.setItem("user", JSON.stringify(arr));

    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div>
      <NavBar />
      <div className='main-page'>
        <form onSubmit={handleSubmit}>
          <div className='heading' style={{ gap: '20px' }}>
            <p>Sign Up</p>
          </div>
          <div className='account'>
            <input
              type='text'
              name='name'
              placeholder='Enter your Name'
              onChange={handleInput}
              required
            />
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
            <p>Already have an account? <a href='/login'>Login</a></p>
          </div>
          <div className='sButton' style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
