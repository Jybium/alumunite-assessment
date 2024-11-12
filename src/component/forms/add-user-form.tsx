import React, { useState } from 'react';
import Input from '../common/input';
import { User } from '../../types/user';
import { getUsers, addUser, convertImageToBase64 } from '../../services/user-service';

const AddUserForm: React.FC = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        role: 'User',
        status: 'Active',
        profilePhoto: '',
    });

    const [errors, setErrors] = useState<{ name: string; email: string }>({
        name: '',
        email: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;

        // Form validation
        if (formData.name.trim() === '') {
            setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }

        if (formData.email.trim() === '') {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
            valid = false;
        } else if (!isValidEmail(formData.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }

        // If form is valid, add user to localStorage
        if (valid) {
            const newUser: User = {
                ...formData,
                id: (getUsers().length + 1).toString(), // Auto-generate ID
            };
            addUser(newUser); // Add user to localStorage
            setFormData({ id: '', name: '', email: '', role: 'User', status: 'Active', profilePhoto: '' }); // Reset form
            alert('User added successfully!');
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

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const base64Image = await convertImageToBase64(file);
            setFormData((prevData) => ({
                ...prevData,
                profilePhoto: base64Image,
            }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Add New User</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-5">

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

                <div className='col-span-2'>
                    <label className="block text-gray-700 font-medium mb-1">Profile Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                    />
                </div>
            </div>

            <button type="submit" className="w-full py-2 bg-blue-300 hover:bg-blue-500 text-white font-bold rounded-lg">
                Add User
            </button>
        </form>
    );
};

export default AddUserForm;
