const router = require('express').Router();
const res = require('express/lib/response');
const { Item, User, Category } = require('../../models');

router.get('/', async (req, res) => {
    Category.findAll()
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', async (req, res) => {
    Category.findOne({

        where: {
            id: req.params.id
        },
        attributes: ['item_type'],
    include: [
      {
        model: Item,
        attributes: ['item_name']
      }
    ]
    })
    .then(dbCategoryData => {
        if(!dbCategoryData) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', async (req, res) => {
    Category.create({
      item_name: req.body.item_name,
      item_type: req.body.item_type,  
      
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;

