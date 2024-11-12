import React from 'react';
import { User } from '../../types/user';

interface Props {
  user: User;
}

const UserProfileCard: React.FC<Props> = ({ user }) => (
  <div className="">
    <img src={user.profilePhoto} alt={`${user.name}'s profile`} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <p>{user.role}</p>
    <p>{user.status}</p>
  </div>
);

export default UserProfileCard;
