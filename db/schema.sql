DROP DATABASE IF EXISTS afterparties_app;
CREATE DATABASE afterparties_app;

\c afterparties_app;
-- DROP TABLE IF EXISTS users;
 CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(225) NOT NULL,
    lastname VARCHAR(225) NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(225) NOT NULL,
    password_hash VARCHAR(225) NOT NULL,
    favorite_places BOOLEAN 
 );

 CREATE TABLE locations (
   id SERIAL PRIMARY KEY,
   name VARCHAR(225) NOT NULL,
   place_id VARCHAR(100),
   lat INTEGER,
   lng INTEGER,
   address VARCHAR(225)
 );