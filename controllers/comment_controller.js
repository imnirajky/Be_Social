const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.createComment = function(req, res) {
    Post.findById(req.body.postId, function(err, post) {
        if (err) {
            console.log('Error in finding post');
            return res.redirect('/');
        }
        if (post) {
            Comment.create({
                comment: req.body.comment,
                user: req.user._id,
                post: req.body.postId
            }, function(err, comment) {
                if (err) {
                    console.log('Error in comment creation');
                    return res.redirect('/');
                }
                post.comment.push(comment);
                post.save();
                res.redirect('/');
            });
        }
    });
}