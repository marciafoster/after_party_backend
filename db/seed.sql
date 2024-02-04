\c afterparties_app;

INSERT INTO users (firstname, lastname, username, email, password_hash, favorite_places) VALUES
    ('John', 'Doe', 'john_doe', 'john@example.com', 'password123', true),
    ('Jane', 'Smith', 'jane_smith', 'jane@example.com', 'letmein2024', false),
    ( 'Alex', 'Wong', 'alex_wong', 'alex@example.com', 'securepassword', true),
    ('Sarah', 'Jones' , 'sara_jones', 'sara@example.com', 'p@ssw0rd', false);


INSERT INTO locations (name, place_id, lat, lng, address) VALUES
    ('Central Park', 'ChIJ4zGFAZpYwokRGUGph3Mf37k', 40.7851, -73.9683, 'Central Park, New York, NY 10024, USA'),
    ('Times Square', 'ChIJqaUj8fVYwokRv5UmZMl75pk', 40.7589, -73.9851, 'Times Square, New York, NY 10036, USA'),
    ('Brooklyn Bridge', 'ChIJPbhk1zRbwokR5x0K9dN_1Hk', 40.7061, -73.9969, 'Brooklyn Bridge, New York, NY 10038, USA'),
    ('Empire State Building', 'ChIJtcaxrqlZwokRfwmmibzPsTU', 40.7488, -73.9857, 'Empire State Building, New York, NY 10001, USA');

