const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Stacked");

const usersSeed = [
  {
    name: ["Taylor Wright"],
    email: ["tjwri25@gmail.com"],
    password: ["Password123"],
  },
];

db.users
  .remove({})
  .then(() => db.users.collection.insertMany(usersSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  module.exports = usersSeed;