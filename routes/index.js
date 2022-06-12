const express = require('express');
const router = express.Router();

const home = require('../controllers/home_controller');


router.get('/', home.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comment', require('./comment'));
module.exports = router;