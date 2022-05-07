const router = require('express').Router();
const res = require('express/lib/response');
const { Item, Category, User } = require('../../models');

//Create new Item
router.post('/', async (req, res) => {
    try {
        const newItem = await Item.create({
            ...req.body,
            user_id: req.session.user_id,
        });
    
    res.status(200).json(newItem);
} catch (err) {
    res.status(400).json(err.message);
}
});

// GET one item
router.get('/item', async (req, res) => {
    try {
      const dbItemData = await Item.findByPk(req.params.id);
  
      const item = dbItemData.get({ plain: true });
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('item', { item, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router

