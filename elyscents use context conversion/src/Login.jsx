import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { useAuth } from './AuthContext'; 

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  
  const { login, user } = useAuth();

  useEffect(() => {
   
    if (user) {
      navigate('/user');
    }

  
    const users = [
      { id: "123456789", password: "111", name: "Rafid Jamil", email: "rafidjamil@gmail.com" },
      { id: "987654321", password: "222", name: "Mister arun", email: "arunsir@gmail.com" }
    ];

    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    
   
    const foundUser = storedUsers.find(u => u.id === id && u.password === password);

    if (foundUser) {
     
      login(foundUser); 
      
    
      navigate('/'); 
    } else {
      alert("ID or Password is incorrect. Please try again.");
    }

    setId('');
    setPassword('');
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>
        <p>Apna account login karein</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>ID</label>
            <input
              type="text"
              placeholder="Enter your ID"
              value={id}
              onChange={e => setId(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;