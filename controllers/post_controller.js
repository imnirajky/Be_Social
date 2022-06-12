const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.createPost = function(req, res) {
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err) {
        if (err) {
            console.log(err, "Error in creating post");
        }
        return res.redirect('/');
    });
}