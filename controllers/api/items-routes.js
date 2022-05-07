const router = require('express').Router();
const model = require('connect-session-sequelize/lib/model');
const { Items, Category } = require('../../models');
const { sequelize } = require('../../models/User');

// GET /api/items
router.get('/', (req, res) => {
    Items.findAll()
    .then(dbItemsData => res.json(dbItemsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Items.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROME category WHERE items.id = category.items_id)')]
        ],
        include: [
            {
                model: Items,
                attributes: ['id', 'title', 'post_url', 'created_at'],
                include: {
                    model: Category, 
                    attributes: ['id', 'category_text', 'items_id', 'user_id', 'created_at'],
                }
            },
            {
                model: Items,
                attributes: ['title'],
                through: Category,
                as: 'category_posts'
            }
        ]
    })
    .then(dbItemsData => {
        if(!dbItemsData) {
            res.status(404).json({ message: 'No item found with this id' });
            return;
        }
        res.json(dbItemsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Items.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbItemsData => {
        if(!dbItemsData) {
            res.status(404).json({ message: 'No item found with this id' });
            return;
        }
        res.json(dbItemsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;