const db = require("../db/dbconfig");


  const getLocations = async () => {
    try {
      const locations = await db.any("SELECT * FROM locations");
      return locations;
    } catch (err) {
      return err;
    }
  };

  const createLocation = async (location) => {
    try {
      const {
        name,
        place_id,
        lat,
        lng,
        address 
      } = location;

      const newLocation = await db.one(
        "INSERT INTO locations (name, place_id, lat, lng, address) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [ name, place_id, lat, lng, address ]
      );
      return newLocation;
    } catch (err) {
      return err;
    }
  };

  module.exports = { getLocations, createLocation } 