import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
            {/* Add more user details */}
        </div>
    );
};

export default UserProfile;
