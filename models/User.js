import mongoose from "mongoose";
// import "mongoose-type-email";

const Schema = mongoose.Schema;

let User = new Schema({
  order: Number,
  gender: String,
  name: {
    title: String,
    first: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 40,
    },
    last: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 40,
    },
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
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
