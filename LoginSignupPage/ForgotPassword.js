import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/send-otp", {
        phone,
      });

      if (res.data.success) {
        setMessage("OTP sent successfully.");
      } else {
        setMessage("Failed to send OTP.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred.");
    }
  };

  return (
    <div className="lForm">
      <div className="forgot-password-form">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <p style={{ fontSize: 35 }}>Forgot your password?</p>
          </div>
          <p
            style={{
              marginBottom: "15px",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            Enter your phone number:
          </p>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={handleChange}
            required
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit">Submit</button>
          </div>

          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
