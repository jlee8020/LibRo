const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    type: String,
    genre: String,
    author: String,
    // notes: [noteSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    
},{
timestamps: true
});


module.exports = mongoose.model('Book', bookSchema);