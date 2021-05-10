const mongoose = require('mongoose');
const { ObjectId, String } = mongoose.Schema.Types;

const articleSchema = new mongoose.Schema({
    articleName: {
        type: String,
        required: true
    },
    likedBy: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    articleContent: {
        type: String,
        requried: true
    },
    createdAt: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    comments: [{
        type: ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model('Article', articleSchema);
