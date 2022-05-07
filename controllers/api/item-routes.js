const router = require('express').Router();
const res = require('express/lib/response');
const { Item, Category } = require('../../models');

//Create New Item
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

// / Get All Items
router.get('/', (req, res) => {
    Item.findAll({
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //Get Item By Id
router.get('/:id', (req, res) => {
    Item.findOne({
      where: {
        id: req.params.id
      },
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No item found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  

module.exports = router

