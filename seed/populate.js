import axios from "axios";
import fs from "fs";
import User from "../models/User.js";
import db from "../db/connection.js";

const USER_SEED_COUNT = 50;
let count = 0;
let allUsers = {};

const getUsers = async () => {
  count++;
  if (count > 1) return;
  let response = await axios(
    `https://randomuser.me/api/?results=${USER_SEED_COUNT}`
  );
  let usersData = response.data.results;
  let structuredUsers = usersData.map(
    ({ gender, name, location, email, dob, phone, cell, picture, nat }) => {
      return {
        gender,
        name,
        location,
        email,
        dob,
        phone,
        cell,
        picture,
        nat,
      };
    }
  );
  allUsers = structuredUsers;
  writeUserData();
};

const writeUserData = async () => {
  try {
    await getUsers();
    await fs.writeFile(
      "./seed/userData.json",
      JSON.stringify(allUsers),
      (err) => {
        if (err) throw err;
        console.log("Data has been written to file successfully.");
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const insertData = async () => {
  try {
    await getUsers();
    await db.dropDatabase();
    await User.create(allUsers);
    await db.close();
  } catch (err) {
    console.log(err);
  }
};

insertData();
