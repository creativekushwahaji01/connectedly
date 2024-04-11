import React, { useState } from "react";
import axios from "axios";

const NewsAddingComponent = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [eventTopic, setEventTopic] = useState("");
  const [venue, setVenue] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventImgUrl, setEventImgUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmitNews = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!topic || !description || !imgUrl) {
      setErrorMessage("Please fill out all fields for news.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/news", {
        topic: topic,
        description: description,
        imgUrl: imgUrl,
      });
      setSuccessMessage("News added successfully!");
      setTopic("");
      setDescription("");
      setImgUrl("");
    } catch (error) {
      console.error("Error:", error.message);
      // You can handle errors here if needed
    }
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!eventTopic || !venue || !eventDate || !eventImgUrl) {
      setErrorMessage("Please fill out all fields for event.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/events", {
        topic: eventTopic,
        venue: venue,
        date: eventDate,
        img_url: eventImgUrl,
      });
      setSuccessMessage("Event added successfully!");
      setEventTopic("");
      setVenue("");
      setEventDate("");
      setEventImgUrl("");
    } catch (error) {
      console.error("Error:", error.message);
      // You can handle errors here if needed
    }
  };

  return (
    <div className="container">
      <h2>Add News and Events</h2>
        <div className="addone">
      {/* News Form */}
      <form onSubmit={handleSubmitNews}>
        <h3>Add News</h3>
        <label>
          Topic Description:
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit News</button>
      </form>

      {/* Event Form */}
      <form onSubmit={handleSubmitEvent}>
        <h3>Add Event</h3>
        <label>
          Topic:
          <input
            type="text"
            value={eventTopic}
            onChange={(e) => setEventTopic(e.target.value)}
          />
        </label>
        <br />
        <label>
          Venue:
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="text"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={eventImgUrl}
            onChange={(e) => setEventImgUrl(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit Event</button>
      </form>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default NewsAddingComponent;
