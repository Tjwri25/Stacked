const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new mongoose.Schema({

  type: [String],

  title: [String],


  url: [String],



});

const articles = mongoose.model("articles", articleSchema);

module.exports = articles;