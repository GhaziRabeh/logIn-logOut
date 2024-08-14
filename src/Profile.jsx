import React, { useContext } from 'react';

import { AuthContext } from './AuthProvider';

const Profile = () => {

  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <h2>Please log in</h2>
      )}
    </div>
  );
};

export default Profile;
