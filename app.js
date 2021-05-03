var express = require('express');

var app = express();

app.listen(4000); //server listen

app.use(express.json()); //for body parse 
app.use(express.urlencoded({ extended: false })); //parses incoming requests with urlencoded payloads

const userRoutes = require('./routes/users') //routes import

app.use('/user',userRoutes); //routes

module.exports = app;