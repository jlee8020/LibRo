const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');

const path = require('path');

const app = express();

const port = process.env.PORT || 3001;
const cors = require('cors');

require('dotenv').config();
require('./config/database');


const booksRouter = require('./routes/api/books');
const usersRouter = require('./routes/api/users');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/auth'));

app.use('/api/books', booksRouter);
app.use('/api/users', usersRouter);

//protected route
// app.use('/api/books', require('./routes/api/books'));


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});