import axios from "axios";
import fs from "fs";
// import db connection
// import db from "../db/connection.js";
let myCharacters = {};

async function getCharacters() {
  let response = await axios("https://spapi.dev/api/characters");
  let characters = response.data;
  let structeredCharacters = characters.data.map(
    ({
      id,
      name,
      age,
      sex,
      hair_color,
      occupation,
      grade,
      religion,
      voiced_by,
      url,
      relatives,
    }) => {
      return {
        id,
        name,
        age,
        sex,
        hair_color,
        occupation,
        grade,
        religion,
        voiced_by,
        url,
        relatives: relatives.map(({ url, relation }) => {
          return {
            url,
            relation,
          };
        }),
      };
    }
  );
  return (myCharacters = structeredCharacters);
}

getCharacters().then(
  () => {
    if (Promise.resolve("success")) {
      Promise.resolve("success").then((val) => {
        // console.log(val, "/n ", myCharacters);
        fs.writeFile(
          "./characters.json",
          JSON.stringify(myCharacters),
          (err) => {
            if (err) {
              throw err;
            }
            console.log("Data has been written to file successfully.");
          }
        );
      });
    }
  }

  // setTimeout(() => {
  //   console.log(myCharacters);
  // }, 4000)
);
