import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container">
      <h2>Events</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event._id}>
                  <h3>{event.topic}</h3>
                  <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                  <p>Venue: {event.venue}</p>
                  <p>Speaker: {event.speaker}</p>
                  <p>Description: {event.description}</p>
                  <img src={event.imgUrl} alt="Event" />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Event;
