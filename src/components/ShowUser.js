import React from 'react';
import { useParams } from 'react-router-dom';
import users from './Users';
import { Link } from 'react-router-dom';

const containerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
};

const headerStyle = {
  fontSize: '24px',
  color: '#333',
  margin: '0 0 20px',
};

const userDetailsStyle = {
  fontSize: '18px',
  color: '#333',
  margin: '0 0 10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  display: 'block',
  fontSize: '18px',
  marginTop: '20px',
};

function ShowUser() {
  const { id } = useParams();
  const userId = parseInt(id);

  const userToShow = users.find((user) => user.id === userId);

  if (!userToShow) {
    return (
      <div style={containerStyle}>
        <h1 style={headerStyle}>User Not Found</h1>
        <p>The user with ID {userId} was not found.</p>
        <Link to="/" style={linkStyle}>Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>User Details</h1>
      <p style={userDetailsStyle}>ID: {userToShow.id}</p>
      <p style={userDetailsStyle}>Name: {userToShow.name}</p>
      <p style={userDetailsStyle}>Email: {userToShow.email}</p>
      <Link to="/" style={linkStyle}>Back to Dashboard</Link>
    </div>
  );
}

export default ShowUser;
