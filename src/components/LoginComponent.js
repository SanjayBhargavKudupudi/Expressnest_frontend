
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State to handle any login error

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Reset error state

        try {
            // Replace with actual API call
            // const response = await fetch('http://your-backend-api/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ username, password }),
            // });

            // if (!response.ok) {
            //     throw new Error('Login failed'); // or use response message
            // }

            // const userInfo = await response.json() || "sample";
            
            const userInfo = "sample";
            onLogin(userInfo); // Call onLogin with the received user info
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
