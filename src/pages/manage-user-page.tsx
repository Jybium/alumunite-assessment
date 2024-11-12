import { useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../services/user-service'; 
import UserProfileCard from '../component/card/user-profile-card';
import EditUserForm from '../component/forms/edit-user-form';
import { User } from '../types/user';

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>(getUsers());
  const [editingUser, setEditingUser] = useState(null);

  // Function to delete a user
  const handleDeleteUser = (userId: any) => {
    deleteUser(userId); // Delete user via service
    setUsers(users.filter(user => user.id !== userId)); // Remove from the list
  };

  // Function to edit user
  const handleEditUser = (user: any) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (updatedUser: any) => {
    updateUser(updatedUser); // Update user via service
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user)); // Update in list
    setEditingUser(null); // Close edit form/modal
  };

  return (
    <div className='p-3 lg:p-6 space-y-6'>
      <h2 className='text-gray-900 text-2xl font-bold'>Manage Users</h2>
      {editingUser ? (
        <EditUserForm
          user={editingUser}
          onUpdate={handleUpdateUser}
          onCancel={() => setEditingUser(null)} // Cancel editing
        />
      ) : (
        users.map(user => (
          <div key={user.id} className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-3 lg:p-6">
            <UserProfileCard user={user} />
            <div className="flex gap-4">
              <button 
                onClick={() => handleEditUser(user)}
                className="bg-yellow-500 text-white p-2 rounded-md"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDeleteUser(user.id)}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ManageUsers;
