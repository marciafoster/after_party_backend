DROP DATABASE IF EXISTS afterparties_app;
CREATE DATABASE afterparties_app;

 CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    firstname VARCHAR(225) NOT NULL,
    lastname VARCHAR(225) NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(225) NOT NULL,
    password_hash VARCHAR(225) NOT NULL
    favorite_places BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );