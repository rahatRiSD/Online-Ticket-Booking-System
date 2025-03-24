import React, { useState } from 'react';

const TicketBooking = () => {
  const [event, setEvent] = useState('');
  const [userName, setUserName] = useState('');

  const submitHandler = () => {
    // Placeholder for actual API request
    fetch('http://localhost/backend/php/ticketBooking.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `event=${event}&user_name=${userName}`,
    })
      .then(response => response.text())
      .then(data => alert(data));
  };

  return (
    <div className="ticket-booking">
      <h2>Book Your Ticket</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <select value={event} onChange={(e) => setEvent(e.target.value)}>
        <option value="">Select Event</option>
        <option value="Concert">Concert</option>
        <option value="Movie">Movie</option>
        <option value="Theatre">Theatre</option>
      </select>
      <button onClick={submitHandler}>Book Ticket</button>
    </div>
  );
};

export default TicketBooking;
