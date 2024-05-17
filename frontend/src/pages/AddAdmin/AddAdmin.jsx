import './AddAdmin.css';
import React, { useState } from 'react';

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    adminType: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center font-bold mb-5">Add Admin</h1>
      <div className="row">
        <div className="column">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="column">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="column">
          <label>Mobile Number:</label>
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Admin Type:</label>
        <select name="adminType" value={formData.adminType} onChange={handleChange} required>
          <option value="" disabled>
            Select admin type
          </option>
          <option value="superAdmin">Super Admin</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
      </div>
      <div className="row">
        <div className="column">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="column">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
      </div>

      <button type="submit" className="button">
        Add Admin
      </button>
    </form>
  );
};

export default AddAdmin;
