const router = require("express").Router();
const { User, Item, Category } = require("../models/");

// homepage
router.get("/", async (req, res) => {
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
  
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


// User Input 
router.get('/iteminput', (req, res) => {
  res.render("additem", {
    loggedIn: req.session.loggedIn,
  });
 
  // Otherwise, render the 'login' template
  
});

// User Input 
router.get('/useritems', (req, res) => {
  res.render("donations", {
    loggedIn: req.session.loggedIn,
  });
 
  // Otherwise, render the 'login' template
  
});

module.exports = router;
