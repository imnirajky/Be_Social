// require library
const mongoose = require('mongoose');
//connect to the database 
mongoose.connect('mongodb://localhost/beSocial');

// acquire the connection present between mongoose and db
const db = mongoose.connection;
//error handling
db.on('error', console.error.bind(console, 'error connecting to db'));
// Successful connection 
db.once('open', function() {
    console.log('Successfully connected to Database');
});