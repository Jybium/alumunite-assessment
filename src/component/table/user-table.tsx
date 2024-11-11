import React from 'react';
import { User } from '../../types/user';

interface Props {
  users: User[];
}

const UserTable: React.FC<Props> = ({ users }) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Name</th>
        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Email</th>
        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Role</th>
        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Status</th>
        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Profile Photo</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td className="px-6 py-4 border-b border-gray-300">{user.name}</td>
          <td className="px-6 py-4 border-b border-gray-300">{user.email}</td>
          <td className="px-6 py-4 border-b border-gray-300">{user.role}</td>
          <td className="px-6 py-4 border-b border-gray-300">{user.status}</td>
          <td className="px-6 py-4 border-b border-gray-300">
            <img src={user.profilePhoto} alt={`${user.name}'s profile`} className="w-10 h-10 rounded-full" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
