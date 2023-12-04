import React, { useState } from 'react';
import axios from 'axios';

function Register({ onRegisterSuccess }) {
  const [show2FA, setShow2FA] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [twoFactorSecret, setTwoFactorSecret] = useState('');
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    HashedPassword: '', // You might want to rename this to just 'Password'
    PersonalDetails: '',
    Private: false
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
const handleVerify2FA = async () => {
  try {
    const verifyResponse = await axios.post('http://localhost:8098/validate_2fa', {
      email: formData.Email,
      token: twoFactorCode
    });
    if (verifyResponse.status === 200) {
      // Assuming verifyResponse.data contains the necessary user info
      onRegisterSuccess(verifyResponse.data);
    } else {
      setMessage('2FA verification failed');
    }
  } catch (error) {
    setMessage('2FA verification failed: ' + error.response.data.error);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8098/users', formData);
      if (response.status === 201) {
        fetchQRCode(formData.Email); // Fetch the QR code for 2FA setup
        // Do not call onRegisterSuccess here
      } else {
        setMessage('Registration failed');
      }
    } catch (error) {
      setMessage('Registration failed: ' + error.response.data.error);
    }
  };
const fetchQRCode = async (email) => {
  try {
    const response = await axios.get(`http://localhost:8098/qr_code?email=${encodeURIComponent(email)}`);
    setTwoFactorSecret(response.data.qr_code);
    setShow2FA(true);
  } catch (error) {
    setMessage('Failed to load QR code: ' + error.message);
  }
};






  return (

    <div>
      {show2FA ? (
        <>
          <h3>Two-Factor Authentication Setup</h3>
          <p>Scan the QR code with your 2FA app and enter the code below:</p>
          <img src={twoFactorSecret} alt="2FA QR Code" />

          <input
            type="text"
            value={twoFactorCode}
            onChange={(e) => setTwoFactorCode(e.target.value)}
            placeholder="Enter 2FA Code"
            required
          />
          <button onClick={handleVerify2FA}>Verify</button>
        </>
      ) : (
        <>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="HashedPassword"
              value={formData.HashedPassword}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <textarea
              name="PersonalDetails"
              value={formData.PersonalDetails}
              onChange={handleChange}
              placeholder="Personal Details"
            />
            <label>
              <input
                type="checkbox"
                name="Private"
                checked={formData.Private}
                onChange={handleChange}
              />
              Private
            </label>
            <button type="submit">Register</button>
          </form>
        </>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;

