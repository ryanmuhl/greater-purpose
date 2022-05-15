const router = require("express").Router();
const { User, Item, Category } = require("../models/");

// homepage
router.get("/", async (req, res) => {
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
  
});

// User Input 
router.get('/iteminput', async (req, res) => {



  res.render("additem", {
    loggedIn: req.session.loggedIn,
  });
 
  // Otherwise, render the 'login' template
  
});

// Find All Donations
router.get('/allitems', async (req, res) => {
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


router.get('/useritems', async (req, res) => {
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



// Login route /Login
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
