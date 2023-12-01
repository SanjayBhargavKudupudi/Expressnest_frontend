import React, { useState } from 'react';
import { createUser, updateUser } from './userService';

const UserForm = ({ existingUser }) => {
    const [userData, setUserData] = useState(existingUser || {});

    const handleSubmit = (event) => {
        event.preventDefault();
        if (existingUser) {
            updateUser(existingUser.id, userData);
        } else {
            createUser(userData);
        }
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={userData.username}
                onChange={e => setUserData({...userData, username: e.target.value})}
            />
            {/* Add other fields */}
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
