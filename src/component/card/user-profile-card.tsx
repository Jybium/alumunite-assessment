import React from 'react';
import { User } from '../../types/user';

interface Props {
  user: User;
}

const UserProfileCard: React.FC<Props> = ({ user }) => (
  <div className="space-y-2 rounded-lg shadow-md flex flex-col justify-center p-4 w-fit hover:scale-105">
    <img src={user.profilePhoto} alt={`${user.name}'s profile`} className='rounded-full w-16 h-16 mx-auto mb-5' />
    <h2><span className="font-bold">Name:</span> {user.name}</h2>
    <p><span className="font-bold">Email Address:</span> {user.email}</p>
    <p><span className="font-bold">Role:</span> {user.role}</p>
    <p><span className="font-bold">Status:</span> {user.status}</p>
  </div>
);

export default UserProfileCard;
