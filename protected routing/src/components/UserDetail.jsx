import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            setUser(loggedInUser);
        } else {
           
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout=()=>{
         localStorage.removeItem('loggedInUser'); 
    navigate('/login'); 
    }

    if (!user) return null; 
   

    return (
        <div className="user-wrapper">
            <div className="user-card">
                <h1>User Details</h1>
                <div className="user-info">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Password:</strong> {user.password}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                
            <button onClick={handleLogout} >Logout</button>

            </div>
        </div>
    );
};

export default UserDetails;
