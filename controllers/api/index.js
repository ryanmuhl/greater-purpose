const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const itemRoutes = require('./item-routes.js')
const categoryRoutes = require('./category-routes.js')

router.use('/item', itemRoutes);
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);

module.exports = router;