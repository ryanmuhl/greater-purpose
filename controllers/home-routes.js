const router = require("express").Router();
const { Item, Category } = require("../models/");

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbItemData = await Item.findAll({
      include: [
        {
          model: Category,
          attributes: ['item_type'],
        },
      ],
    });

    const items = dbItemData .map((item) =>
      item.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      items,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
