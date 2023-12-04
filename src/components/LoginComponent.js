import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './Welcome';
import { auth, googleAuthProvider, signInWithPopup,githubAuthProvider } from '../firebaseConfig';
import Register from '../register';

function Login() {
  const [email, setEmail] = useState('test@g');
  const [password, setPassword] = useState('1234');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) { 
      const foundUser = JSON.parse(loggedInUser); 
      setUser(foundUser); 
    }
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const idToken = await result.user.getIdToken();


      const backendResponse = await axios.post('http://localhost:8098/login', {
      type: 'google',
      idToken: idToken,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(backendResponse.data);
     setUser(backendResponse.data);
      setMessage('Google login successful');
      // Handle further actions based on backendResponse
    } catch (error) {
      setMessage('Google login failed: ' + error.message);
    }
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8098/login', {
        type: 'email',
        email: email,
        password: password,
      });
      setMessage('Login successful');
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
      setLogout(false);

      // Handle redirection or further actions here
    } catch (error) {
      setMessage('Login failed: ' + error);
    }
    //   remove below hardcoded data after api integration
    const mockUser = {
      username: 'test',
      email: email,
      userId: 0,
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    setLogout(false);
    // comment above part after api integration
  };
  const handleRegisterSuccess = (userData) => {
    setUser(userData); // Set the user data received from the registration response
    setShowRegister(false); // Hide the registration form
  };

  if (user && !logout) {
    return <Welcome user={user} setLogout={setLogout} />;
  }
  return (
  <div>
      {showRegister ? (
        <>
<Register onRegisterSuccess={handleRegisterSuccess} />
          <button onClick={() => setShowRegister(false)}>Go to Login</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
<form onSubmit={handleEmailPasswordLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
          <button onClick={handleGoogleLogin}>Login with Google</button>
          {message && <p>{message}</p>}
          <button onClick={() => setShowRegister(true)}>Go to Register</button>
        </>
      )}
    </div>


  );
}

export default Login;





// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null); // State to handle any login error

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setError(null); // Reset error state

//         try {
//             // Replace with actual API call
//             // const response = await fetch('http://your-backend-api/login', {
//             //     method: 'POST',
//             //     headers: {
//             //         'Content-Type': 'application/json',
//             //     },
//             //     body: JSON.stringify({ username, password }),
//             // });

//             // if (!response.ok) {
//             //     throw new Error('Login failed'); // or use response message
//             // }

//             // const userInfo = await response.json() || "sample";
            
//             const userInfo = "sample";
//             onLogin(userInfo); // Call onLogin with the received user info
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <div>
//             <h1>Login</h1>
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={username} 
//                     onChange={(e) => setUsername(e.target.value)} 
//                     placeholder="Username" 
//                 />
//                 <input 
//                     type="password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                     placeholder="Password" 
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
