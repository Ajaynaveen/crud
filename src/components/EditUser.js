import React, { useState, useEffect } from 'react';
import users from './Users';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userToEdit = users.find((user) => user.id === parseInt(id));

    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [id]);

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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '10px',
    color: '#333',
    fontSize: '16px',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userIndex = users.findIndex((u) => u.id === parseInt(id));

    users[userIndex] = user;

    setUser({ name: '', email: '' });

    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Edit User</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditUser;
