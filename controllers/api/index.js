const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const itemRoutes = require('./items-routes');
const categoryRoutes = require('./category-routes')

router.use('/item', itemRoutes)
router.use('/user', userRoutes);
router.use('/category', categoryRoutes);

module.exports = router;