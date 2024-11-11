import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/side-bar';
import UserTable from './pages/home';
import AddUserForm from './pages/add-user-page';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', profilePhoto: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive', profilePhoto: 'https://via.placeholder.com/40' },
];

const App: React.FC = () => (
  <Router>
    <Navbar />
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/add-user" element={<AddUserForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  </Router>
);

export default App;
