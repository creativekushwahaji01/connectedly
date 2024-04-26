import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userprofile.css";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get("'http://localhost:5000/profile"); // Adjust the endpoint as per your backend API
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-profile">
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <div className="profile-info">
            <div className="profile-img">
              <img src={userData.imgUrl} alt="Profile" />
            </div>
            <div className="profile-details">
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Rank:</strong> {userData.rank}</p>
              <p><strong>College Name:</strong> {userData.collegeName}</p>
              <p><strong>Address:</strong> {userData.address}</p>
              <p><strong>Mobile Number:</strong> {userData.mobileNumber}</p>
              <p><strong>Instagram:</strong> <a href={userData.instaLink}>{userData.instaLink}</a></p>
              <p><strong>Twitter:</strong> <a href={userData.twitterLink}>{userData.twitterLink}</a></p>
              <p><strong>LinkedIn:</strong> <a href={userData.linkedinLink}>{userData.linkedinLink}</a></p>
              <p><strong>Date:</strong> {new Date(userData.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
