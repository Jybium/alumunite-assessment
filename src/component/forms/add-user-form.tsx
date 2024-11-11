import React, { useState } from 'react';
import Input from '../common/input';

const AddUserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'Active',
    profilePhoto: '',
  });


const [errors, setErrors] = useState<{ name: string; email: string; }>({
  name: '',
  email: '',
});

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form validation and submission logic here
  if (formData.name.trim() === '') {
    setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
  }

  if (formData.email.trim() === '') {
    setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
  } else if (!isValidEmail(formData.email)) {
    setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
  }
};

const isValidEmail = (email: string) => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
};
   

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8 space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-700">Add New User</h2>
      
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
        error={errors.name}
      />
      
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
        error={errors.email}
      />
      
      <div>
        <label className="block text-gray-700 font-medium mb-1">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Guest">Guest</option>
        </select>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      
      <Input
        label="Profile Photo URL"
        name="profilePhoto"
        value={formData.profilePhoto}
        onChange={handleChange}
        placeholder="Enter profile photo URL"
      />
      
      <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
