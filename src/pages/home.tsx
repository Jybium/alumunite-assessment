import { useState } from 'react';
import { getUsers } from '../services/user-service';
import UserProfileCard from '../component/card/user-profile-card';
import UserTable from '../component/table/user-table';

const Home = () => {
    const [isCardView, setIsCardView] = useState(true); // state to toggle between views
    const users = getUsers();

    const handleToggleView = () => {
        setIsCardView(prevState => !prevState);
    };

    return (
        <div className='p-3 lg:p-6'>

            <div className="flex justify-between mb-6">
                <h2 className='text-gray-900 text-2xl font-bold'>All Users</h2>
                <button
                    onClick={handleToggleView}
                    className="p-2 bg-blue-500 text-white rounded-md mb-4"
                >
                    {isCardView ? 'Switch to Table View' : 'Switch to Card View'}
                </button>
            </div>

            {isCardView ? (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-3 lg:p-6">
                    {users.map(user => (
                        <UserProfileCard key={user.id} user={user} />
                    ))}
                </div>
            ) : (
                <div className="p-3 lg:p-6">
                    <UserTable users={users} />
                </div>
            )}
        </div>
    );
};

export default Home;
