import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <div className="logout">
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Logout;
// <?php
// session_start();

// // Destroy session
// session_unset();
// session_destroy();

// // Clear the cookie
// setcookie("username", "", time() - 3600, "/");

// header("Location: index.html"); // Redirect to login page
// exit();
// ?>
