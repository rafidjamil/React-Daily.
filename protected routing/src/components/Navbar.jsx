import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation(); // Is se route change hone par Navbar refresh hoga

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(loggedInUser);
  }, [location]); // Har dafa jab link change hoga, ye check karega

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/home"><div className="logo">MyWebsite</div></Link>

        <nav>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            
            {/* Conditional Rendering: Agar user hai to Profile, warna Login */}
            {user ? (
              <li><Link to="/user" className="login-btn">Profile</Link></li>
            ) : (
              <li><Link to="/login" className="login-btn">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar