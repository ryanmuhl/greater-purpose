const router = require('express').Router();
const { Category } = require('../../models');

router.get('/', (req, res) => {
    Category.findAll()
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Category.findOne({
        attributes: {},
        where: {
            id: req.params.id
        },
        include: {
            model: Category,
            attributes: ['id', 'title', 'post_url', 'created_at']
        },
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

module.exports = router;