
import { getUsers } from '../services/user-service';
import UserProfileCard from '../component/card/user-profile-card';

const Home = () => {
  const users = getUsers();
  
  return (
    <div className='w-full'>
      {users.map(user => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Home;
