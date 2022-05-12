const { User } = require('../../models');
const { sequelize } = require('../../models/Post');
const Post = require('../../models/Post');

const router = require('express').Router()

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            [sequelize.literal()]
        ],
        order: [['created_at', 'DESC']],

    include: [
        {
            model: User,
            attributes: ['username']
        }
    ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_url', 'created_at'],
            }
        ]
    })
})

module.exports = router;