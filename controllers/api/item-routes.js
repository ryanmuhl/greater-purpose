const router = require('express').Router();
const res = require('express/lib/response');
const { Item, User, Category } = require('../../models');


router.post('/', (req, res) => {
  Item.create({
    item_name: req.body.item_name,
    item_description: req.body.item_description,
    pickup_date: req.body.pickup_date,
    pickup_contact: req.body.pickup_contact,
    pickup_address: req.body.pickup_address,
    user_id: req.session.user_id,
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// / Get All Items /api/item
router.get('/', (req, res) => {
    Item.findAll({
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Get item by id /api/item/id
router.get('/:id', (req, res) => {
  Item.findOne({

    where: {
      id: req.params.id
    },
    attributes: ['id', 'item_name', 'item_description', 'pickup_date', 'pickup_contact', 'pickup_address'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
  

module.exports = router

