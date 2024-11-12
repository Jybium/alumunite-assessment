import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/side-bar';
import UserTable from './pages/home';
import AddUserForm from './pages/add-user-page';
import ManageUserForm from './pages/manage-user-page';


const App: React.FC = () => (
  <Router>
    <Navbar />
    <div className="container mt-5 mx-auto">
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/manage-users" element={<ManageUserForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
