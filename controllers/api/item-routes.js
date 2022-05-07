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

//Get new items by ID
router.get('/:id', async (req, res) => {
    const itemData = await Item.findOne({where:{id:req.params.id}} )
        // include: [
        //     {
        //         model: Item,
        //         attributes: ['username']
        //     }
        // ]
    .then(() => console.log(itemData));

});

module.exports = router

