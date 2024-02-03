const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT

// Define your Google Maps API endpoint
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

// Define your Google Maps API key
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

app.use(cors())

// Set up a route to proxy requests to the Google Maps API
app.get('/places', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        ...req.query // Forward query parameters from the client to the Google Maps API
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});