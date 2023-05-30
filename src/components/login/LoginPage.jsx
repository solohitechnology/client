import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import './login.css'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['jwt']); // react-cookie hook

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/login', { username, password });
      const { accessToken } = response.data;

      // Save JWT as a session cookie
      setCookie('jwt', accessToken, { path: '/' });
      
      // Handle successful login, such as redirecting to another page
      // Example: Redirect to home page
      window.location.href = '/'; // Replace '/' with the desired URL
      
    } catch (error) {
      // Handle login error, such as displaying an error message
      console.error(error);
    }
  };

  return (
    <div>

      <form action="">
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>I  dont have an account ? <a href="/register">Create One</a> </p>
        </form>
    </div>
  );
}

export default LoginPage;
