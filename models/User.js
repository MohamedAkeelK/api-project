import mongoose from "mongoose";
const Schema = mongoose.Schema;

let User = new Schema({
  // _id: { type: String },
  gender: String,
  name: {
    title: String,
    first: String,
    last: String,
  },
  location: {
    street: { number: Number, name: String },
    city: String,
    state: String,
    country: String,
    postcode: String,
    coordinates: { latitude: Number, longitude: Number },
    timezone: {
      offset: String,
      description: String,
    },
  },
  email: String,
  dob: { data: String, age: Number },
  phone: String,
  cell: String,
  picture: {
    large: String,
    medium: String,
    thumbnail: String,
  },
  nat: String,
});

export default mongoose.model("users", User);
