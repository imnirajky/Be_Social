const User = require('../models/user');
module.exports.signup = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('signup');
}
module.exports.signin = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('signin');
}
module.exports.profile = function(req, res) {
    return res.render('profile');
}
module.exports.createNewAccount = function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            console.log('Error in finding user in signing up!!!');
            return;
        }
        const details = {
            name: `${req.body.first_Name} ${req.body.last_Name}`,
            email: req.body.email,
            password: req.body.password,
            dob: `${req.body.day}-${req.body.month}-${req.body.year}`
        };
        if (!user) {
            User.create(details, function(err, user) {
                if (err) {
                    console.log('Error in creating user!!!');
                    return res.redirect('/users/signup');
                }
            });
        }
        return res.redirect('/users/signin');
    });
}

module.exports.createSession = function(req, res) {
    return res.redirect('/users/profile');
}


module.exports.signOut = function(req, res) {
    req.logout(function(err) {
        if (err) {
            console.log(err);
        }
        return res.redirect('/');
    });
}