const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
const cors = require('cors');

require('dotenv').config();
require('./config/database');

const booksRouter = require('./routes/api/books');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/books', booksRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});