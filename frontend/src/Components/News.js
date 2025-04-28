import React, { useState, useEffect } from 'react';
import './news.css'; // Import the CSS file for styling

function EventsComponent() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchEventsData() {
            try {
                const response = await fetch('http://localhost:5000/news');
                const data = await response.json();
                console.log(data)
                setNews(data);
            } catch (error) {
                console.error('Error fetching newss data:', error);
            }
        }

        fetchEventsData();
    }, []);

    return (
        <div className="news-container">
            <div className="news-header">
                <h1>Tech Community Events</h1>
                <p>Stay updated with the latest News of our community</p>
            </div>

            <div className="news-grid">
                {news.map((news) => (
                    <div key={news.id} className="news-card">
                        <div className="news-image">
                            <img src={news.imgUrl || '/placeholder.svg'} alt={news.topic} />
                        </div>
                        <div className="news-details">
                            <h2>{news.topic}</h2>
                            <p>{new Date(news.date).toLocaleDateString()}</p>
                            <p>{news.description}</p>
                        </div>
                        <div className="news-footer">
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventsComponent;
