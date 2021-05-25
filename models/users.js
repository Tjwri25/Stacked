const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    trim: true,
    required: "Email is Required"
  },

  password: {
    type: String,
    trim: true,
    validate: [({ length }) => length >= 6, "Password should be more than 6 characters."],
    required: "Password is Required"
  },


});

const users = mongoose.model("users", userDataSchema);

module.exports = users;