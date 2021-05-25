const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },


});

const users = mongoose.model("users", userDataSchema);

module.exports = users;