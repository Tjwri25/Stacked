const router = require('express').Router();
const userRoutes = require('./userRoutes');
const activityDataRoutes = require("./activityDataRoutes");
const articlesDataRoutes = require("./articlesDataRoutes");
router.use("/activityData", activityDataRoutes);
router.use('/users', userRoutes);
router.use('/articles', articlesDataRoutes);

module.exports = router;
