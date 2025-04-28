import React, { useState, useEffect } from 'react';
import './userprofile.css';
import {
    FaEdit, FaBuilding, FaGraduationCap, FaCalendarAlt,
    FaUsers, FaEnvelope, FaGlobe, FaComment, FaExternalLinkAlt,
    FaLinkedin, FaGithub, FaTwitter
} from 'react-icons/fa';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('contributions');

    useEffect(() => {
        const fetchUserData = () => {
            setLoading(true);
            setError(null);
            try {
                const storedUserData = localStorage.getItem('user'); // fetching from localStorage
                console.log(storedUserData);
                if (!storedUserData) {
                    setError("User data not found in localStorage.");
                    setLoading(false);
                    return;
                }
                const parsedUserData = JSON.parse(storedUserData);
                setUserData(parsedUserData);
                setLoading(false);
            } catch (err) {
                setError("Failed to load user data.");
                setLoading(false);
                console.error("Error parsing user data from localStorage:", err);
            }
        };

        fetchUserData();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        try {
            return new Date(dateString).toLocaleDateString();
        } catch {
            return "Invalid date";
        }
    };

    const generateUsername = (name) => {
        if (!name) return "@user";
        return `@${name.toLowerCase().replace(/\s+/g, '')}`;
    };

    if (loading) {
        return (
            <div className="profile-container">
                <div className="loading-spinner"></div>
                <p>Loading user data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="profile-container error-message">
                <p>Error loading profile: {error}</p>
                <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        );
    }

    if (!userData) {
        return <div className="profile-container">No user data available.</div>;
    }

    return (
        <div className="profile-container">
            {/* Header banner */}
            <div className="header-banner">
                <img
                    alt="Profile header background"
                    className="banner-image"
                    src="https://storage.googleapis.com/a1aa/image/5b454bd8-ec41-4912-55b3-437e7ac9613e.jpg"
                />
                <div className="profile-image-container">
                    <img
                        alt={`Profile of ${userData.name}`}
                        className="profile-image"
                        src={userData.imgUrl || "https://storage.googleapis.com/a1aa/image/b7294163-16ea-4ce6-0888-e11e61cb3608.jpg"}
                    />
                </div>
            </div>

            {/* Profile info and update button */}
            <div className="profile-info">
                <div className="profile-details">
                    <h1 className="profile-name">{userData.name || "Anonymous User"}</h1>
                    <p className="profile-username">{generateUsername(userData.name)}</p>
                    <div className="profile-tags">
                        <span className="profile-tag">{userData.rank || "Enthusiast"}</span>
                        <span className="profile-location">{userData.address || "Unknown Location"}</span>
                    </div>
                </div>
                <button className="update-profile-btn" type="button">
                    <FaEdit className="edit-icon" />
                    Update Profile
                </button>
            </div>

            {/* Info cards row */}
            <div className="info-cards">
                <div className="info-card">
                    <FaBuilding className="info-icon" />
                    <div>
                        <p className="info-label">College</p>
                        <p className="info-value">{userData.collegeName || "Not specified"}</p>
                    </div>
                </div>
                <div className="info-card">
                    <FaGraduationCap className="info-icon" />
                    <div>
                        <p className="info-label">Rank</p>
                        <p className="info-value">{userData.rank || "N/A"}</p>
                    </div>
                </div>
                <div className="info-card">
                    <FaCalendarAlt className="info-icon" />
                    <div>
                        <p className="info-label">Joined</p>
                        <p className="info-value">{formatDate(userData.date)}</p>
                    </div>
                </div>
                <div className="info-card">
                    <FaUsers className="info-icon" />
                    <div>
                        <p className="info-label">Communities</p>
                        <p className="info-value">{userData.communities || 0}</p>
                    </div>
                </div>
            </div>

            <div className="profile-content">
                {/* Left column */}
                <div className="left-column">
                    {/* About box */}
                    <div className="profile-box">
                        <h2 className="box-title">About</h2>
                        <p className="box-content">
                            {userData.bio || `A passionate individual currently studying at ${userData.collegeName || "an institution"}. Exploring new technologies and eager to learn and contribute.`}
                        </p>
                    </div>

                    {/* Contact & Social box */}
                    <div className="profile-box">
                        <h2 className="box-title">Contact & Social</h2>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>{userData.email || "No email provided"}</span>
                            </li>
                            {userData.instaLink && (
                                <li className="contact-item">
                                    <FaGlobe className="contact-icon" />
                                    <a className="contact-link" href={userData.instaLink} target="_blank" rel="noopener noreferrer">
                                        Instagram Profile <FaExternalLinkAlt className="external-link-icon" />
                                    </a>
                                </li>
                            )}
                            {userData.linkedinLink && (
                                <li className="contact-item">
                                    <FaLinkedin className="contact-icon" />
                                    <a className="contact-link" href={userData.linkedinLink} target="_blank" rel="noopener noreferrer">
                                        LinkedIn Profile <FaExternalLinkAlt className="external-link-icon" />
                                    </a>
                                </li>
                            )}
                            {userData.twitterLink && (
                                <li className="contact-item">
                                    <FaTwitter className="contact-icon" />
                                    <a className="contact-link" href={userData.twitterLink} target="_blank" rel="noopener noreferrer">
                                        Twitter Profile <FaExternalLinkAlt className="external-link-icon" />
                                    </a>
                                </li>
                            )}
                            {userData.githubLink && (
                                <li className="contact-item">
                                    <FaGithub className="contact-icon" />
                                    <a className="contact-link" href={userData.githubLink} target="_blank" rel="noopener noreferrer">
                                        GitHub Profile <FaExternalLinkAlt className="external-link-icon" />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Skills & Interests box */}
                    <div className="profile-box">
                        <h2 className="box-title">Skills & Interests</h2>
                        <p className="skills-title">Skills</p>
                        <div className="skills-tags">
                            {userData.skills?.length > 0 ? (
                                userData.skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))
                            ) : (
                                <>
                                    <span className="skill-tag">Learning</span>
                                    <span className="skill-tag">Exploring</span>
                                    <span className="skill-tag">Coding</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right column */}
                <div className="right-column">
                    {/* Tabs */}
                    <div className="profile-tabs">
                        <button 
                            className={`profile-tab ${activeTab === 'contributions' ? 'active' : ''}`}
                            onClick={() => setActiveTab('contributions')}
                        >
                            Contributions
                        </button>
                        <button 
                            className={`profile-tab ${activeTab === 'projects' ? 'active' : ''}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            Projects
                        </button>
                        <button 
                            className={`profile-tab ${activeTab === 'experience' ? 'active' : ''}`}
                            onClick={() => setActiveTab('experience')}
                        >
                            Experience
                        </button>
                    </div>

                    {/* Tab content */}
                    {activeTab === 'contributions' && (
                        <>
                            {userData.contributions?.length > 0 ? (
                                userData.contributions.map((contribution, index) => (
                                    <div key={index} className="contribution-card">
                                        <div className="card-header">
                                            <div>
                                                <h3 className="card-title">{contribution.title || `Contribution ${index + 1}`}</h3>
                                                <p className="card-subtitle">{contribution.type || 'General'} · {formatDate(contribution.date)}</p>
                                            </div>
                                            <span className="card-badge">{contribution.type || 'General'}</span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-stats">
                                                <div className="card-stat">
                                                    <span>🔥</span>
                                                    <span>{contribution.likes || 0} likes</span>
                                                </div>
                                                <div className="card-stat">
                                                    <FaComment className="stat-icon" />
                                                    <span>{contribution.comments || 0} comments</span>
                                                </div>
                                            </div>
                                            <button className="view-btn">View</button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-content-message">
                                    <p>No contributions yet</p>
                                </div>
                            )}
                        </>
                    )}

                    {activeTab === 'projects' && (
                        <div className="no-content-message">
                            <p>No projects to display</p>
                        </div>
                    )}

                    {activeTab === 'experience' && (
                        <div className="no-content-message">
                            <p>No experience to display</p>
                        </div>
                    )}

                    {userData.contributions?.length > 0 && activeTab === 'contributions' && (
                        <button className="view-all-btn" type="button">
                            View All Contributions
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
