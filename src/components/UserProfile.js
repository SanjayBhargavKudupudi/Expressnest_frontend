import React, { useState } from 'react';

const UserProfile = ({ user }) => {
    console.log(user);
    const [socialStats, setSocialStats] = useState({
        followers: 0,
        following: 0,
        posts: 0
    });

    return (
        <div>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
            <p>User ID: {user.userId} </p>
            <p>Followers : {socialStats.followers}</p>
            <p>Following : {socialStats.following}</p>
            <p>Posts : {socialStats.posts}</p>
            {/* Add more user details */}
        </div>
    );
};

export default UserProfile;
