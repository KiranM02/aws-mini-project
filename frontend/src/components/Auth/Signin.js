import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css';
import BASE_URL from '../../config';


function Signin() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post('http://localhost:5000/api/auth/signin', form);
      const res = await axios.post(`${BASE_URL}/api/auth/signin`, form);
      localStorage.setItem('token', res.data.token);
//       // Example during login:
// localStorage.setItem('token', response.data.token);

      alert('Login successful');
      window.location.href = '/employees';
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (

    <div className='auth-form-container'>
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Signin</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Signin;
