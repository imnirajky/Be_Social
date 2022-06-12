const Post = require('../models/post');
module.exports.home = function(req, res) {
    Post.find({})
        .populate('user')
        .populate({
            path: 'comment',
            populate: {
                path: 'comment'
            }
        })
        .exec(function(err, posts) {
            if (err) {
                console.log(err, "Error in pushing posts");
            }
            return res.render('home', {
                post: posts
            });
        });
}