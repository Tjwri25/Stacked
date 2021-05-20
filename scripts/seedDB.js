const mongoose = require("mongoose");


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

const actData = [
    {
        title: "CSS",
        docs: ["https://www.w3schools.com/css/"],
        introduced: ["Week 2, Activity 1, Line 3"],
        
        used: ["Week: 2, Activity: 7, Line: 6, 9, 10", "Week: 7, Activity: 2, Folder: assets/css/style.css, Line: 3", "Week: 8, Activity: 6, Folder: assets/css/style.css Line: 2"],
        
      },


];