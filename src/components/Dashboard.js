import React from 'react';
import users from './Users';
import { Link } from 'react-router-dom';

function Dashboard() {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headerStyle = {
    fontSize: '24px',
    color: '#333',
    margin: '0 0 20px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    margin: '0 0 10px',
    padding: '10px',
    border: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    marginLeft: '10px',
    padding: '5px 10px',
    border: '1px solid #333',
    borderRadius: '4px',
    color: '#333',
  };

 
  const createLinkStyle = {
    marginTop: '20px',
    display: 'block',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>User Dashboard</h1>
      <ul style={listStyle}>
        {users.map((user) => (
          <li key={user.id} style={listItemStyle}>
            {user.name} -
            <Link to={`/show-user/${user.id}`} style={linkStyle}>Show</Link>
            <Link to={`/edit-user/${user.id}`} style={linkStyle}>Edit</Link>
            <Link to={`/delete-user/${user.id}`} style={linkStyle}>Delete</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-user" style={createLinkStyle}>Create User</Link>
    </div>
  );
}

export default Dashboard;
