import { getUsers } from '../services/user-service';
import UserProfileCard from '../component/card/user-profile-card';

const ManageUsers = () => {
  const users = getUsers();

  return (
    <div>
      <h1>Manage Users</h1>
      {users.map(user => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ManageUsers;
