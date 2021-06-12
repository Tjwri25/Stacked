const path = require("path");
const router = require("express").Router();
const { articles } = require("../../models");
router.get("/articles", (req, res) => {
  articles
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