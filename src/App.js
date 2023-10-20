import React from 'react';
import Dashboard from './components/Dashboard';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShowUser from './components/ShowUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/show-user/:id" element={<ShowUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/delete-user/:id" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
