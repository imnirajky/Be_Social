const express = require('express');
const router = express.Router();
const passport = require('passport');


const usersController = require('../controllers/users_controller');


router.get('/signup', usersController.signup);
router.get('/signin', usersController.signin);
router.get('/profile', usersController.profile);
router.post('/create', usersController.createNewAccount);
router.post('/create-session', passport.authenticate(
    'local', { failureRedirect: '/users/signin' }
), usersController.createSession);
router.get('/signout', usersController.signOut);
module.exports = router;