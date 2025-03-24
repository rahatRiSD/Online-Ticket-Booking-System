<?php
require_once 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $event = $_POST['event'];
    $user_name = $_POST['user_name'];

    $sql = "INSERT INTO tickets (event, user_name) VALUES ('$event', '$user_name')";

    if ($conn->query($sql) === TRUE) {
        echo "Ticket booked successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
<?php
require_once 'session.php'; // Ensure the user is logged in

echo "<h1>Welcome to the Ticket Booking Page</h1>";
echo "<p>You are logged in as: " . $_SESSION['username'] . "</p>";

// Example: Display a list of events (can be dynamic from the database)
echo "<ul><li>Concert</li><li>Movie</li><li>Theatre</li></ul>";

echo "<a href='logout.php'>Logout</a>";
?>
