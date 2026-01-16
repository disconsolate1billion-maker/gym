import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Account = () => {
  const { user, isAuthenticated } = useAuth();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!isAuthenticated) {
    return (
      <div className="account-page">
        <h1>Account</h1>
        <p>Please <Link to="/login">login</Link> to view your account.</p>
      </div>
    );
  }

  return (
    <div className="account-page">
      <h1>My Account</h1>
      <p>Email: {user?.email}</p>
      <p>Name: {user?.name || 'Not set'}</p>
    </div>
  );
};

export default Account;
