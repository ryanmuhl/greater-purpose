const router = require("express").Router();
const { User, Item, Category } = require("../models/");
const withAuth = require('../utils/auth');

// homepage  http://localhost:3001/
router.get("/", async (req, res) => {
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
  
});

// User Input http://localhost:3001/iteminput/
router.get('/iteminput', withAuth, async (req, res) => {



  res.render("additem", {
    loggedIn: req.session.loggedIn,
  });
 
  // Otherwise, render the 'login' template
  
});

// Find All Donations http://localhost:3001/allitems/
router.get('/allitems', withAuth, async (req, res) => {
  try {
    // Get all items and JOIN with user data
    const dbItemData = await Item.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const items = dbItemData.map((item) =>
    item.get({ plain: true })
  );
 

  res.render('donations', {
    items,
    loggedIn: req.session.loggedIn,
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

//Get all user items http://localhost:3001/useritems/
router.get('/useritems', withAuth, async (req, res) => {
  try {
    const userData = await Item.findAll( {
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: User,
        },
      ],
    });
    const userItems = userData.map((item) =>
    item.get({ plain: true })
  );
  console.log(userItems)

  res.render('userdonations', {
    userItems,
    loggedIn: req.session.loggedIn,
  });
  
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});


// Login route /Login  http://localhost:3001/login/
router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
