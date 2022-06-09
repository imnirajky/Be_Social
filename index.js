const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));

app.use(session({
    name: 'Be_Social',
    secret: '******something',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost/beSocial",
        autoRemove: 'disabled'
    }, function(err) {
        console.log(err || 'connect-mongo setup');
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);



//use express router
app.use('/', require('./routes'));


//Launch server
app.listen(port, function(err) {
    if (err) {
        console.log(`Error while running the server: ${port}`);
    }
    console.log(`Successfully launched Server on port: ${port}`);
});