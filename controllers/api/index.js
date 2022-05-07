const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const itemRoutes = require('./item-routes.js')

router.use('/user', userRoutes);
router.use('item', itemRoutes);

module.exports = router;