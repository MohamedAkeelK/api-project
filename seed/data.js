import db from "../db/connection.js";
import House from "../models/House.js";
import Character from "../models/Character.js";
import houses from "./houses.json" assert { type: "json" };
import characters from "./characters.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert data
  await Character.create(characters);
  await House.create(houses);

  // close db connection
  await db.close();
};

insertData();
