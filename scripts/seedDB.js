const mongoose = require("mongoose");
const db = require("../models")



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Stacked"
);

const actData = 
[
  {
    title: "CSS",
    docs: ["https://www.w3schools.com/css/"],
    introduced: ["Week 2, Activity 1, Line 3"],

    used: [
      "Week: 2, Activity: 7, Line: 6, 9, 10",
      "Week: 7, Activity: 2, Folder: assets/css/style.css, Line: 3",
      "Week: 8, Activity: 6, Folder: assets/css/style.css Line: 2",
    ],
  },
];

db.activityData.remove({})
  .then(() => db.activityData.collection.insertMany(actData))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });