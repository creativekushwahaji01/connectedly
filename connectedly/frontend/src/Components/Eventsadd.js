import React from 'react'

function Eventsadd() {
    const [eventTopic, setEventTopic] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [venue, setVenue] = useState('Online');
    const [speaker, setSpeaker] = useState('');
    const [description, setDescription] = useState('');
    const [eventImgUrl, setEventImgUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmitEvent = async (e) => {
      e.preventDefault();
  
      // Check if any field is empty
      if (!eventTopic || !eventDate || !venue || !speaker || !description || !eventImgUrl) {
        setErrorMessage('Please fill out all fields for event.');
        return;
      }
  
      try {
        await axios.post('http://localhost:5000/events', {
          topic: eventTopic,
          date: eventDate,
          venue: venue,
          speaker: speaker,
          description: description,
          imgUrl: eventImgUrl
        });
        setSuccessMessage('Event added successfully!');
        setEventTopic('');
        setEventDate('');
        setVenue('Online');
        setSpeaker('');
        setDescription('');
        setEventImgUrl('');
      } catch (error) {
        console.error('Error:', error.message);
        // You can handle errors here if needed
      }
    };
  
    return (
      <div className="container">
        <h2>Add Events</h2>
        <form onSubmit={handleSubmitEvent}>
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
            Date:
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
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
            Speaker:
            <input
              type="text"
              value={speaker}
              onChange={(e) => setSpeaker(e.target.value)}
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
              value={eventImgUrl}
              onChange={(e) => setEventImgUrl(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit Event</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    );
  };
  

export default Eventsadd
