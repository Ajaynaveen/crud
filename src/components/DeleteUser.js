import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import users from './Users';

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

const textContainerStyle = {
  fontSize: '18px',
  color: '#333',
  margin: '0 0 20px',
};

const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
};

const cancelBtnStyle = {
  ...buttonStyle,
  marginLeft: '1rem',
  backgroundColor: '#ccc',
};

function DeleteUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    const userId = parseInt(id);

    const updatedUsers = users.filter((user) => user.id !== userId);

    users.length = 0;
    Array.prototype.push.apply(users, updatedUsers);

    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Delete User</h1>
      <p style={textContainerStyle}>Are you sure you want to delete this user?</p>
      <button onClick={handleDelete} style={buttonStyle}>
        Yes, Delete
      </button>
      <button onClick={() => navigate('/')} style={cancelBtnStyle}>
        Cancel
      </button>
    </div>
  );
}

export default DeleteUser;
