const { articleModel } = require('../models');

function getArticles(req, res, next) {
    articleModel.find()
        .populate('userId')
        .then(articles => res.json(articles))
        .catch(next);
}

function getArticle(req, res, next) {
    const { articleId } = req.params;

    articleModel.findById(articleId)

        .then(article => res.json(article))
        .catch(next);
}

function createArticle(req, res, next) {
    console.log(req.user)
    const { articleName,  createdAt, imageUrl, quantity, category, articleContent, creator, comments } = req.body;
    console.log(req.body)
    const { _id: userId } = req.user;

    articleModel.create({ articleName,  createdAt, imageUrl,  quantity, category, articleContent, creator, userId, comments })
        .then((createdArticle) => res.status(200)
            .send(createdArticle))
        .catch(next);
}


function postEditArticle(req, res, next) {
    const articleId = req.params.articleId;
    articleModel.updateOne({ _id: articleId }, { $set: { ...req.body } }).then((updatedArticle) => {
        res.status(200).send(updatedArticle);
    }).catch(next)
}

function deleteArticle(req, res, next) {
    const articleId = req.params.articleId;
    articleModel.deleteOne({ _id: articleId }).then((deletedArticle) => {
        res.status(200).send(deletedArticle);
    }).catch(next)
}

function likeArticle(req, res, next) {
    const articleId = req.params.articleId;
    const { _id: userId } = req.user;
    articleModel.findByIdAndUpdate({ _id: articleId }, { $push: { likedBy: userId } }, { new: true })
        .then(updatedArticle => {
            res.status(200).json(updatedArticle)
        })
        .catch(next);
}


module.exports = {
    getArticles,
    createArticle,
    getArticle,
    likeArticle,
    postEditArticle,
    deleteArticle
}
