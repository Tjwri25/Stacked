const router = require('express').Router();
const userRoutes = require('./userRoutes');
const activityDataRoutes = require("./activityDataRoutes");
router.use("/activityData", activityDataRoutes);
router.use('/users', userRoutes);

module.exports = router;
