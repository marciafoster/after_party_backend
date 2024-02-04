const express = require('express');
const locations = express.Router()
require("dotenv").config()
const { getLocations, createLocation } = require('../queries/locations')



locations.get('/', async (req, res) => {
    try {
        const locations = await getLocations()
        res.status(200).json({ data: locations })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

locations.post('/', async (req, res) => {
    try {
        const newLocation = await createLocation(req.body)
        res.status(201).json({ data: newLocation })
    } catch (err) {
        res.status(500).json({ error: "Invalid Information", info: err.message })
    }
})



module.exports = locations