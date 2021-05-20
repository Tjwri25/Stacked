const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activityDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  docs: [String],

  docs: [String],

  introduced: [String],

  used: [String],

const activityData = mongoose.model("activityData", dataSchema);

});

const activityData = mongoose.model("activityData", dataSchema);

module.exports = activityData;
