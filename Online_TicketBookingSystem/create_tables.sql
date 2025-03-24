CREATE DATABASE ticket_booking_system;

USE ticket_booking_system;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event VARCHAR(100) NOT NULL,
    user_name VARCHAR(100) NOT NULL
);
CREATE DATABASE ticket_booking_system;

USE ticket_booking_system;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Create tickets table
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event VARCHAR(100) NOT NULL,
    user_name VARCHAR(100) NOT NULL
);

-- Insert a sample user (you should hash the password in production)
INSERT INTO users (username, password) VALUES ('user1', 'password123');
