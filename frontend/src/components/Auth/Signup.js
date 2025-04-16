// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Signup() {
// //   const [form, setForm] = useState({ name: '', email: '', password: '' });

// //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/auth/signup', form);
// //       alert(res.data.message);
// //     } catch (err) {
// //       alert(err.response?.data?.message || 'Signup failed');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Signup</h2>
// //       <input name="name" placeholder="Name" onChange={handleChange} required />
// //       <input name="email" placeholder="Email" onChange={handleChange} required />
// //       <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // }

// // export default Signup;



// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', form);
//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Signup</h2>
//       <input name="name" placeholder="Name" onChange={handleChange} required />
//       <input name="email" placeholder="Email" onChange={handleChange} required />
//       <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      // Example during login:
// localStorage.setItem('token', response.data.token);

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
