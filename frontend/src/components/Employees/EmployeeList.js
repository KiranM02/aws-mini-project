// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function EmployeeList() {
// //   const [employees, setEmployees] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // Get token from local storage (set during signin)
// //   const token = localStorage.getItem('token');

// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/employees', {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         setEmployees(res.data);
// //       } catch (err) {
// //         alert('Failed to fetch employees. Please make sure you are logged in.');
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchEmployees();
// //   }, [token]);

// //   if (loading) return <p>Loading employees...</p>;

// //   return (
// //     <div>
// //       <h2>Employee List</h2>
// //       {employees.length === 0 ? (
// //         <p>No employees found.</p>
// //       ) : (
// //         <table border="1" cellPadding="8">
// //           <thead>
// //             <tr>
// //               <th>ID</th>
// //               <th>Name</th>
// //               <th>Joining Date</th>
// //               <th>Phone No.</th>
// //               <th>Department</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {employees.map(emp => (
// //               <tr key={emp.id}>
// //                 <td>{emp.id}</td>
// //                 <td>{emp.name}</td>
// //                 <td>{emp.joining_date}</td>
// //                 <td>{emp.phone}</td>
// //                 <td>{emp.department}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // }

// // export default EmployeeList;














// // src/components/employees/EmployeeList.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({
//     name: '',
//     joining_date: '',
//     phone: '',
//     department: ''
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem('token');

//   const fetchEmployees = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/employees', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setEmployees(res.data);
//     } catch (err) {
//       alert('Error fetching employees');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editingId) {
//         // Update existing employee
//         await axios.put(`http://localhost:5000/api/employees/${editingId}`, form, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         console.log("Submitting form:", form);
// console.log("Token:", token);

//         alert('Employee updated!');
//       } else {
//         // Add new employee
//         await axios.post('http://localhost:5000/api/employees', form, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         alert('Employee added!');
//       }

//       setForm({ name: '', joining_date: '', phone: '', department: '' });
//       setEditingId(null);
//       fetchEmployees();
//     } catch (err) {
//       alert('Operation failed');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Delete this employee?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/employees/${id}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         fetchEmployees();
//       } catch (err) {
//         alert('Delete failed');
//       }
//     }
//   };

//   const handleEdit = (emp) => {
//     setForm({
//       name: emp.name,
//       joining_date: emp.joining_date,
//       phone: emp.phone,
//       department: emp.department
//     });
//     setEditingId(emp.id);
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{editingId ? 'Edit Employee' : 'Add New Employee'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//         <input name="joining_date" placeholder="YYYY-MM-DD" value={form.joining_date} onChange={handleChange} required />
//         <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
//         <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
//         <button type="submit">{editingId ? 'Update' : 'Add'}</button>
//       </form>

//       <h2>Employee List</h2>
//       {employees.length === 0 ? (
//         <p>No employees found</p>
//       ) : (
//         <table border="1" cellPadding="6">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Joining Date</th>
//               <th>Phone</th>
//               <th>Department</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td>{emp.name}</td>
//                 <td>{emp.joining_date}</td>
//                 <td>{emp.phone}</td>
//                 <td>{emp.department}</td>
//                 <td>
//                   <button onClick={() => handleEdit(emp)}>Edit</button>
//                   <button onClick={() => handleDelete(emp.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default EmployeeList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css'
import '../Auth/AuthForm.css'
// import '../Employees/employee.css'

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: '', department: '', phone: '', joining_date: '' });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem('token'); // Assuming JWT token is stored after login

  const fetchEmployees = async () => {
    const res = await axios.get('http://localhost:5000/api/employees', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setEmployees(res.data);
  };

  useEffect(() => { fetchEmployees(); }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/api/employees/${editingId}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5000/api/employees', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    setForm({ name: '', department: '', phone: '', joining_date: '' });
    fetchEmployees();
  };

  const handleEdit = (emp) => {
    setForm({
      name: emp.name,
      department: emp.department,
      phone: emp.phone,
      joining_date: emp.joining_date
    });
    setEditingId(emp.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/employees/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchEmployees();
  };

  return (
    
    <div className="container">
      
      <h2>Employee Form</h2>

      <div className='form-wrapper'>
      <form className='auth-form' onSubmit={handleSubmit} >
        <input name="name" value={form.name} placeholder="Name" onChange={handleChange} required />
        <input name="department" value={form.department} placeholder="Department" onChange={handleChange} required />
        <input name="phone" value={form.phone} placeholder="Phone" onChange={handleChange} required />
        <input name="joining_date" value={form.joining_date} type="date" onChange={handleChange} required />
        <button type="submit">{editingId ? 'Update' : 'Add'} Employee</button>
      </form>
      </div>
      
      {/* <div className='container'> */}
        <h2>Employee List</h2>
        {/* <ul>
          {employees.map(emp => (
            <li key={emp.id}>
              {emp.name} - {emp.department} - {emp.phone} - {emp.joining_date}
              <button onClick={() => handleEdit(emp)}>Edit</button>
              <button onClick={() => handleDelete(emp.id)}>Delete</button>
            </li>
          ))}
        </ul> */}
      {/* </div> */}

      <table className="employee-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Joining Date</th>
      <th>Phone</th>
      <th>Department</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {employees.map(emp => (
      <tr key={emp.id}>
        <td>{emp.name}</td>
        <td>{emp.joining_date}</td>
        <td>{emp.phone}</td>
        <td>{emp.department}</td>
        <td className="action-buttons">
          <button className="edit" onClick={() => handleEdit(emp)}>Edit</button>
          <button className="delete" onClick={() => handleDelete(emp.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



    </div>
  );
}

export default EmployeeList;
