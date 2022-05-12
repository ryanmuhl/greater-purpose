const router = require('express').Router();
const res = require('express/lib/response');
const { Items, User, Category } = require('../../models');

// GET /api/items
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
      },
      {
        model: Category,
        attributes: ['item_type']
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

router.post('/', (req, res) => {
  
  Item.create(req.body)
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;