const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL ||
    'mongodb://localhost/bookapp', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Mongoose connected to ${db.host}:${db.port}`);
});