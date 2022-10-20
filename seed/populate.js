import axios from "axios";
import fs from "fs";
import User from "../models/User.js";
import users from "./userData.json" assert { type: "json" };

// import db connection;
import db from "../db/connection.js";
// let allUsers = {};

let count = 0;
const getUsers = async () => {
  count++;
  if (count > 1) return;

  let response = await axios("https://randomuser.me/api/?results=10");
  let users = response.data.results;
  let structuredUsers = users.map(
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
  return writeUserData(structuredUsers);
};

const writeUserData = async (users) => {
  try {
    getUsers().then(() => {
      if (Promise.resolve("success")) {
        Promise.resolve("success").then(() => {
          fs.writeFile("./seed/userData.json", JSON.stringify(users), (err) => {
            if (err) throw err;
            console.log("Data has been written to file successfully.");
          });
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const insertData = async () => {
  try {
    await getUsers();
    await db.dropDatabase();
    await User.create(users);
    await db.close();
  } catch (err) {
    console.log(err);
  }
};

insertData();
