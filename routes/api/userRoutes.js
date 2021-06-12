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

// router.post("/login", (req, res) => {
//   users
//     .findOne(req.body)

//     .then((response) => {
//       res.json(response);
//     });
// });

router.post('/login', async (req, res) => {
  try {
    const userData = await users.findOne({ where: { email: req.body.email } });
    console.log('user', userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
