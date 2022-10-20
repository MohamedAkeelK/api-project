import db from "../db/connection.js";
import User from "../models/User.js";
import users from "./userData.json" assert { type: "json" };
import { writeUserData } from "./populate.js";

const insertData = async () => {
  try {
    await writeUserData();

    // reset database
    await db.dropDatabase();

    // insert data
    // await User.create(users);

    // close db connection
    await db.close();
  } catch (err) {
    console.log(err);
  }
};

insertData();
