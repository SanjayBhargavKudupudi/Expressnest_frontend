import React, { useState, useEffect } from 'react';
// import { getAllUsers } from './userService';

const UserList = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'test1',
            email: 'test1@gmail.com'
        },
        {
            id: 2,
            username: 'test2',
            email: 'test2@gmail.com'
        },
    ]);

    // useEffect(() => {
    //     getAllUsers().then(response => {
    //         setUsers(response.data);
    //     });
        
    // }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.username}</h3>
                    <p>{user.email}</p>
                    {/* Add buttons or links for detail, edit, delete */}
                </div>
            ))}
        </div>
    );
};

export default UserList;
