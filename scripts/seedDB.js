const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Stacked");

const actData = [
  {
    title: "CSS",
    docs: ["https://www.w3schools.com/css/"],
    introduced: ["Week 2, Activity 1, Line 3"],

    used: [
      "Week: 2, Activity: 7, Line: 6, 9, 10  |",
      "Week: 7, Activity: 2, Folder: assets/css/style.css, Line: 3",
      "Week: 8, Activity: 6, Folder: assets/css/style.css Line: 2",
    ],
  },
  {
    title: "for loop",
    docs: ["https://www.w3schools.com/forloop/"],
    introduced: ["Week 3, Activity 11, Line 2"],

    used: ["Week: 3, Activity: 13, Line: 11"],
  },
  {
    title: "components",
    docs: ["https://www.w3schools.com/react/react_components.asp"],
    introduced: ["Week 19, Activity 3, Folder: Solved/components/HelloDiv.js"],

    used: [
      "Week: 19, Activity: 5, Folder: Solved/App.js, Solved/components/HelloBootstrap.js, Line: 1,",
      "Week: 19, Activity: 9, Folder: Solved/components, Solved/App.js, Line 9, 10, 11",
      "Week 19, Activity: ",
    ],
  },
];

db.activityData
  .remove({})
  .then(() => db.activityData.collection.insertMany(actData))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = actData;
