const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { articleController } = require('../controllers');



router.get('/', articleController.getArticles);
router.post('/', auth(), articleController.createArticle);

router.get('/:articleId', articleController.getArticle);

router.post('/edit/:articleId', auth(), articleController.postEditArticle)

router.put('/:articleId', auth(), articleController.likeArticle);

router.post('/delete/:articleId', auth(), articleController.deleteArticle)


module.exports = router