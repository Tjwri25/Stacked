const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Stacked");

const actData = [
  {
    title: "css",
    docs: ["https://www.w3schools.com/css/"],
    introduced: ["Week 2, Activity 1, Line 3"],

    used: [
      "- Week: 2, Activity: 7, Line: 6, 9, 10 -",
      "- Week: 7, Activity: 2, Folder: assets/css/style.css, Line: 3 -",
      "- Week: 8, Activity: 6, Folder: assets/css/style.css Line: 2 -",
    ],
  },
  {
    title: "for loop",
    docs: ["https://www.w3schools.com/forloop/"],
    introduced: ["Week 3, Activity 11, Line 2"],

    used: ["- Week: 3, Activity: 13, Line: 11 -"],
  },
  {
    title: "components",
    docs: ["https://www.w3schools.com/react/react_components.asp"],
    introduced: ["Week 19, Activity 3, Folder: Solved/components/HelloDiv.js"],

    used: [
      "- Week: 19, Activity: 5, Folder: Solved/App.js, Solved/components/HelloBootstrap.js, Line: 1, -",
      "- Week: 19, Activity: 9, Folder: Solved/components, Solved/App.js, Line 9, 10, 11 -",
    ],
  },
  {
    title: "JSX variables",
    docs: ["https://reactjs.org/docs/introducing-jsx.html"],
    introduced: ["Week:19, Activity 6"],

    used: [
      "- Week: 19, Activity: 7, Folder: Solved/components/JSXVariables.js, Line 18 -",
    ],
  },
  {
    title: "props",
    docs: ["https://reactjs.org/docs/components-and-props.html"],
    introduced: ["Week:19, Activity 10"],

    used: [
      "- Week: 19, Activity 10, Folder: components/Alert.js, Line 3 -",
      "- Week 19, Activity 12, Folder: Solved/components/Wrapper/index.js, Line 4 -",
      "- Week 19, Activity 12, Folder: Solved/components/Title/index.js, Line 4 -",
      "- Week 19, Activity 12, Folder: Solved/components/FriendCard/index.js, Line 4 -",
      "- Week 19, Activity 11, Folder: Solved/components/Math.js, Line 10 -",
      "- Week 19, Activity 11, Folder: Solved/components/Calculator.js, Line 11 -",
    ],
  },
  {
    title: "component map",
    docs: ["https://reactjs.org/docs/lists-and-keys.html"],
    introduced: ["Week:19, Activity 13"],

    used: [
      "- Week: 19, Activity 13, Folder: Solved/Basic/src/components/List.js, Line 7 -",
    ],
  },
  {
    title: "state",
    docs: ["https://reactjs.org/docs/state-and-lifecycle.html"],
    introduced: ["Week:19, Activity 14"],

    used: [
      "- Week: 19, Activity 14, Folder: src/components/Counter.js, Line 6 -",
      "- Week 19, Activity 21, Folder: Solved/components/pages/PortfolioContainer.js, Line 9 -",
    ],
  },
  {
    title: "setState",
    docs: ["https://reactjs.org/docs/state-and-lifecycle.html"],
    introduced: ["Week:19, Activity 14"],

    used: [
      "- Week: 19, Activity 14, Folder: src/components/Counter.js, Line 13 -",
      "- Week 19, Activity 21, Folder: Solved/components/pages/PortfolioContainer.js, Line 14 -",
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
