const router = require('express').Router();
const path = require('path');




router.get('/', async (req, res) => {
    res.render("Home");
  });

  // router.get('/search', async (req, res) => {
  //   res.render("Search");
  // });

  // router.get('/communityboard', (req, res) => {
  //   res.render("CommunityBoard");
  // });

  // router.get('/login', (req, res) => {
  //   res.render("Login");
  // });

  // router.get('/articles', (req, res) => {
  //   res.render("Articles");
  // });

module.exports = router;