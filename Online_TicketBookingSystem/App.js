import React, { useState } from 'react';
import TicketBooking from './components/TicketBooking';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import Logout from './components/Logout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Online Ticket Booking System</h1>
      {isLoggedIn ? (
        <>
          <Logout onLogout={logoutHandler} />
          <TicketBooking />
          <Chatbot />
        </>
      ) : (
        <Login onLogin={loginHandler} />
      )}
    </div>
  );
};

export default App;
