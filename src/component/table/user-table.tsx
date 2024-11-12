import React from 'react';
import { User } from '../../types/user';

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => (
  <table className="min-w-full bg-white table-fixed overflow-auto">
  <thead>
    <tr>
      <th className="w-1/12 px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
      <th className="w-2/12 px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Name</th>
      <th className="w-4/12 px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider truncate">Email</th>
      <th className="w-2/12 px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Role</th>
      <th className="w-2/12 px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Status</th>
      <th className="w-1/12 px-6 py-3 border-b-2 border-gray-300 text-center leading-4 text-blue-500 tracking-wider">Profile Photo</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td className="px-6 py-4 border-b border-gray-300">{user.id}</td>
        <td className="px-6 py-4 border-b border-gray-300">{user.name}</td>
        <td className="px-6 py-4 border-b border-gray-300 truncate">{user.email}</td>
        <td className="px-6 py-4 border-b border-gray-300">{user.role}</td>
        <td className="px-6 py-4 border-b border-gray-300">{user.status}</td>
        <td className="px-6 py-4 border-b border-gray-300">
          <img src={user.profilePhoto} alt={`${user.name}'s profile`} className="w-16 h-16 rounded-full mx-auto" />
        </td>
      </tr>
    ))}
  </tbody>
</table>

);

export default UserTable;
