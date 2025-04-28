// TechDashboard.jsx
import React, { useEffect, useState } from 'react';
import './TechDashboard.css';
import { 
  FaLaptop, FaSearch, FaBell, FaUser, FaUsers, 
  FaCommentDots, FaCalendarAlt, FaCode, FaBook, 
  FaCompass, FaCog, FaHome 
} from 'react-icons/fa';

export default function TechDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      setLoading(true);
      setError(null);
      try {
        const storedUser = localStorage.getItem('user'); // fetching from localStorage
        console.log("Raw stored user:", storedUser);
        if (!storedUser) {
          setError("User data not found in localStorage.");
          setLoading(false);
          return;
        }
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        console.log("Parsed user:", parsedUser);
        setLoading(false);
      } catch (err) {
        setError("Failed to load user data.");
        setLoading(false);
        console.error("Error parsing user data from localStorage:", err);
      }
    };

    fetchUser();
  }, []);

  const stats = [
    { id: 1, label: 'Communities', value: 12, detail: '3 new this month', icon: <FaUsers /> },
    { id: 2, label: 'Discussions', value: 132, detail: '+22% from last month', icon: <FaCommentDots /> },
    { id: 3, label: 'Events', value: 8, detail: '4 upcoming this week', icon: <FaCalendarAlt /> },
    { id: 4, label: 'Projects', value: 7, detail: '2 contributions today', icon: <FaCode /> }
  ];

  const feed = [
    { 
      id: 1, 
      user: 'Jamie Doe', 
      action: 'posted in Frontend Developers', 
      time: '2 hours ago', 
      title: 'Thoughts on the new React Server Components?', 
      content: 'I\'ve been experimenting with React Server Components...',
      comments: 24, 
      reactions: 47 
    },
    { 
      id: 2, 
      user: 'Alex Kim', 
      action: 'shared a project in Python Enthusiasts', 
      time: 'Yesterday', 
      title: 'FastAPI + React Dashboard Template',
      comments: 8,
      reactions: 32
    }
  ];

  const upcomingEvents = [
    { id: 1, month: 'MAY', day: '15', title: 'React Advanced Workshop', time: '10:00 AM - 2:00 PM', tag: 'Virtual' },
    { id: 2, month: 'MAY', day: '18', title: 'Python for Data Science Meetup', time: '6:30 PM - 8:30 PM', tag: 'San Francisco' },
    { id: 3, month: 'MAY', day: '22', title: 'Design Systems Conference', time: '9:00 AM - 5:00 PM', tag: 'New York' },
    { id: 4, month: 'MAY', day: '29', title: 'Web Performance Optimization', time: '11:00 AM - 1:00 PM', tag: 'Virtual' }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">
          <FaLaptop className="icon" />
          <span>connectedly</span>
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search communities, events, projects..." 
            aria-label="Search"
          />
        </div>
        <nav className="header-nav">
          <a href="#"><FaHome /> Home</a>
          <a href="#"><FaCompass /> Explore</a>
          <a href="#"><FaBook /> Learn</a>
          <a href="#"><FaCalendarAlt /> Events</a>
          <button className="icon-btn notification-btn">
            <FaBell />
            <span className="badge">3</span>
          </button>
          <button className="profile-btn" aria-label="User profile">
            <FaUser />
          </button>
        </nav>
      </header>

      <main className="dashboard-main">
        <aside className="sidebar">
          <div className="profile-overview">
            <div className="avatar"></div>
            <div className="user-name">{user?.name}</div>
            <div className="user-role">{user?.role}</div>
          </div>

          <div className="completion">
            <div className="completion-header">
              <span>Profile Completion</span>
              <span>{user?.profileCompletion}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${user?.profileCompletion}%` }}
              ></div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <a href="#"><FaHome /> Dashboard</a>
            <a href="#"><FaUsers /> My Communities</a>
            <a href="#"><FaCommentDots /> Discussions</a>
            <a href="#"><FaCalendarAlt /> Events</a>
            <a href="#"><FaCode /> Projects</a>
            <a href="#"><FaBook /> Learning Resources</a>
            <a href="#"><FaCompass /> Explore</a>
          </nav>

          <div className="settings">
            <FaCog /> Settings
          </div>
        </aside>

        <section className="content">
          <div className="welcome-header">
            <div>
              <h1>Welcome back, {user?.name?.split(' ')[0]}!</h1>
              <p>Here's what's happening in your tech communities today.</p>
            </div>
            <div className="header-actions">
              <button className="primary-btn">Create Post</button>
              <button className="secondary-btn">Join Event</button>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className="stat-header">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-icon">{stat.icon}</span>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>

          <div className="main-content">
            <div className="feed">
              <div className="feed-tabs">
                <button className="active">Activity Feed</button>
                <button>Discussions</button>
                <button>Projects</button>
                <button className="view-all">View All</button>
              </div>

              {feed.map((item) => (
                <article key={item.id} className="feed-article">
                  <div className="feed-header">
                    <div className="avatar-small"></div>
                    <div className="feed-meta">
                      <div>
                        <strong>{item.user}</strong> {item.action}
                      </div>
                      <div className="time">{item.time}</div>
                    </div>
                  </div>
                  <h2>{item.title}</h2>
                  {item.content && <p className="feed-content">{item.content}</p>}
                  <div className="engagement">
                    <span><FaCommentDots /> {item.comments} comments</span>
                    <span><FaCode /> {item.reactions} reactions</span>
                  </div>
                </article>
              ))}
            </div>

            <aside className="events-aside">
              <div className="events-header">
                <h3>Upcoming Events</h3>
                <button className="view-all">View All</button>
              </div>

              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="date-box">
                    <span className="month">{event.month}</span>
                    <span className="day">{event.day}</span>
                  </div>
                  <div className="event-details">
                    <div className="event-title">{event.title}</div>
                    <div className="event-time">{event.time}</div>
                    <div className="event-tag">{event.tag}</div>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
