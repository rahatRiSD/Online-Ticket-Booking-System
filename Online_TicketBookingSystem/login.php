<?php
session_start();
require_once 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate user credentials (example: checking from database)
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Set session variables
        $_SESSION['username'] = $username;
        $_SESSION['logged_in'] = true;

        // Set a cookie for 30 days
        setcookie("username", $username, time() + (30 * 24 * 60 * 60), "/");

        // Redirect to a new page (e.g., ticket booking)
        header("Location: ticketBooking.php");
        exit();
    } else {
        echo "Invalid credentials. Please try again.";
    }
}
?>
