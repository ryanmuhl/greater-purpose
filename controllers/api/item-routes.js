const router = require('express').Router();
const res = require('express/lib/response');
const { Item, User, Category } = require('../../models');


// / Get All Items /api/item
router.get('/', async (req, res) => {
    Item.findAll({
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Get item by id /api/item/id
router.get('/:id', async (req, res) => {
  Item.findOne({

    where: {
      id: req.params.id
    },
   
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

//Delete item by id /api/item/id
router.delete('/:id', async (req, res) => {
  Item.destroy({

    where: {
      id: req.params.id
    },

  })
    .then(dbDeleteData => {
      if (!dbDeleteData) {
        res.status(404).json({ message: 'Unble to Delete Due to Wrong ID' });
        return;
      }
      res.json(dbDeleteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', async(req, res) => {
  req.body.user_id=req.session.userId;
  req.body.id=req.session.itemId
  Item.create(req.body)
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


  
module.exports = router

