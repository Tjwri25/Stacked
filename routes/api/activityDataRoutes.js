const path = require("path");
const router = require("express").Router();
const { activityData } = require("../../models");
router.get("/:keyword", (req, res) => {
  activityData
    .findOne({
      title: req.params.keyword,
    })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;