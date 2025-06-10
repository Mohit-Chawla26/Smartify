import React from 'react';
import Navbar from './NavBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser"); // ✅ Correct — remove logged-in user
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className='home'>
        <h2>Welcome Home Page!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
