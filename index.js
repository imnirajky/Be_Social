const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err) {
    if (err) {
        console.log(`Error while running the server: ${port}`);
    }

    console.log(`Successfully launched Server on port: ${port}`);
});