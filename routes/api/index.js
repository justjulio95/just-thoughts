const router = require('express').Router();
// thoughts routes go here
const userRoutes = require('./user-routes');

// thoughts router goes here
router.use('/users', userRoutes)

module.exports = router;