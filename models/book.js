const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    // type: String,
    // genre: String,
    author: String,
    // notes: [noteSchema],
    
},{
timestamps: true
});


module.exports = mongoose.model('Book', bookSchema);