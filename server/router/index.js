const router = require('express').Router();
const users = require('./users');
const articles = require('./articles');
const likes = require('./likes');

router.use('/users', users);
router.use('/articles', articles);

module.exports = router;
