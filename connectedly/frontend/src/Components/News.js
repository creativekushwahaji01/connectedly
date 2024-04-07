import React, { useState, useEffect } from 'react';

function NewsComponent() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        async function fetchNewsData() {
            try {
                const response = await fetch('http://localhost:5000/news');
                const data = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        }

        fetchNewsData();
    }, []);

    return (
        <div className="news-container">
            <div className='newshead headcommunity'>
                <h1>Get daily update of technology and community news</h1>
            </div>
            <div className='newsmap'>
            {newsData.map(newsItem => (
                <div key={newsItem.id} className="news-item">
                    <img src={newsItem.imgUrl} alt={newsItem.topic} />
                    <div className="news-details">
                        <h2>{newsItem.topic}</h2>
                        <p>Date Uploaded: {newsItem.date}</p>
                        <p>{newsItem.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default NewsComponent;
