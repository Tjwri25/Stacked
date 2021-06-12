const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.articles
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.articles
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}