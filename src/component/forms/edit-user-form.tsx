import React, { useState} from 'react';
import { User } from '../../types/user';
import { convertImageToBase64 } from '../../services/user-service';  // Import convertImageToBase64 from service

interface Props {
  user: User;
  onUpdate: (updatedUser: User) => void;
  onCancel: () => void;
}

const EditUserForm: React.FC<Props> = ({ user, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    profilePhoto: user.profilePhoto || '', // Keep profile photo if available
  });

  const [errors, setErrors] = useState<{ name: string; email: string }>({
    name: '',
    email: '',
  });

  // Form validation
  const validateForm = () => {
    let valid = true;

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

    return valid;
  };

  const isValidEmail = (email: string) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate before submitting
    if (validateForm()) {
      const updatedUser = {
        ...user, 
        name: formData.name, 
        email: formData.email, 
        role: formData.role, 
        status: formData.status, 
        profilePhoto: formData.profilePhoto,
      };

      onUpdate(updatedUser); // Update user details
      alert('User updated successfully!');
    }
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-bold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block font-bold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block font-bold">Role</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div>
        <label className="block font-bold">Status</label>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div>
        <label className="block font-bold">Profile Photo</label>
        {formData.profilePhoto && (
          <div className="mb-2">
            <img
              src={formData.profilePhoto}
              alt="Profile Preview"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex gap-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white p-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
