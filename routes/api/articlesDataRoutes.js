const path = require("path");
const router = require("express").Router();
const { articles } = require("../../models");
router.get("/:type", (req, res) => {
  articles
  .find({
    type: req.params.type,
  })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.post("/addarticles", (req, res) => {
  articles
    .create(req.body)({
      title: req.body.title,
      url: req.body.url,
      type: req.body.type,
    })
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;