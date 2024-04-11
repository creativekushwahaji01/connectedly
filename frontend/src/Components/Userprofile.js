import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>No user data found.</p>;
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Contact:</strong> {userData.contact}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <div className="social-links">
          <p><strong>Social Links:</strong></p>
          <ul>
            {userData.socialLinks.map((link, index) => (
              <li key={index}><a href={link.url}>{link.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
