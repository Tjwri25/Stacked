const path = require("path");
const router = require("express").Router();
const { users } = require("../../models");

router.post("/signup", (req, res) => {
  users
    .create(req.body)({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/login", (req, res) => {
  users
    .findOne(req.body)

    .then((response) => {
      res.json(response);
    });
});


module.exports = router;
