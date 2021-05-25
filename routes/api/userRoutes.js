const path = require("path");
const router = require("express").Router();
const { users } = require('../../models');

router.post('/', (req, res) => {
    users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  });


