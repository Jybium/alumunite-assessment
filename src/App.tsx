import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/side-bar';
import UserTable from './pages/home';
import AddUserForm from './pages/add-user-page';
import ManageUserForm from './pages/manage-user-page';


const App: React.FC = () => (
  <Router>
    <Navbar />
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/manage-user" element={<ManageUserForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
