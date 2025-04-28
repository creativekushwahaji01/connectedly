import React, { useEffect, useState } from "react";
import axios from "axios";
import "./events.css";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events");
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Tech Community Events</h1>
      <p className="description">
        Discover upcoming and past tech events organized by community members and global tech leaders
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="event_main">
          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            <ul>
              {events.map((event) => (
                <div className="event_details" key={event._id}>
                  <div className="event_description">
                    <h3>{event.topic}</h3>
                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                    <p>Venue: {event.venue}</p>
                    <p>Speaker: {event.speaker}</p>
                    <p>Description: {event.description}</p>
                  </div>
                  <div className="event_img">
                    <img className="eve_img" src={event.imgUrl} alt="Event" />
                  </div>
                </div>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Event;
