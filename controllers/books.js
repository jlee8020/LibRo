const Book = require('../models/book');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);


module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne

};


async function index(req, res) {
    try{
        const books = await Book.find({});
        res.status(200).json(books);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    const book = await Book.create(req.body);
    res.status(201).json(book);
}

async function show(req, res) {
    try{
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function update(req, res) {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedBook);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function deleteOne(req, res) {
    try{
        const deletedBook = await Book.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedBook);
    }
    catch(err){
        res.status(500).json(err);
    }
}