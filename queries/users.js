const db = require("../db/dbconfig");
// Import library to hash password
const bcrypt = require("bcrypt");

const createUser = async (user) => {
  try {
    const {
      firstname,
      lastname,
      username,
      email,
      password_hash,
      favorite_places,
    } = user;
    const salt = 10;
    const hash = await bcrypt.hash(password_hash, salt);
    const newUser = await db.one(
      "INSERT INTO users (firstname, lastname, username, email, password_hash, favorite_places) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [firstname, lastname, username, email, hash, favorite_places]
    );
    return newUser;
  } catch (err) {
    return err;
  }
};

const getUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (err) {
    return err;
  }
};

const logInUser = async (user) => {
  try {
    const loggedInUser = await db.oneOrNone(
      "SELECT * FROM users WHERE username=$1",
      user.username
    );

    if (!loggedInUser) {
      return false;
    }

    const passwordMatch = await bcrypt.compare(
      user.password_hash,
      loggedInUser.password_hash
    );

    if (!passwordMatch) {
      return false;
    }

    return loggedInUser;
  } catch (err) {
    return err;
  }
};

module.exports = { createUser, getUsers, logInUser };
