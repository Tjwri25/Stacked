const path = require("path");
const router = require("express").Router();
const { users } = require('../../models');

router.post('/', (req, res) => {
   users.create(req.body)({
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


  module.exports = router;

