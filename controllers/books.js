const Book = require('../models/book');
// const User = require('../models/user');


module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne

};

// async function index(req, res) {
//     const books = await Book.find({});
//     res.status(200).json(books);
// }

//working code ***
// console.log(req.user.id)

function index(req, res){
    
    // Book.find({user:req.user}, function(err, books){
    Book.find({}, function(err, books){
        res.json({books});
    });
}

// async function index(req, res) {
//     const user = await User.findById(req.body.user);
//     res.status(200).json(user);
//   }


async function create(req, res) {
    const book = await Book.create(req.body);
    res.status(201).json(book);
}

// function create(req, res){
//     Book.create(req.body, function(err, book){
//         res.json({book});
//     });
// }

// async function create(req, res) {
//     const create = await User.findById(req.body.user._id, function(err, user) {
//         console.log(req.body)
//         user.books.push(req.body);
//         user.save(function(err) {
//         res.status(201).json(create);
//         });
//     });
// }
// async function show(req, res) {
//     const book = await Book.findById(req.params.id);
//     res.status(200).json(book);
// }

function show(req, res){
    Book.findById(req.params.id, function(err, book){
        res.json({book});
    });
}

// async function update(req, res) {
//     const updatedBook = await Book.findOneAndUpdate(req.params.id, req.body, {new: true});
//     res.status(200).json(updatedBook);
// }

function update(req, res){
    Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}, function(err, book){
            res.json({book});
        });
}

// async function deleteOne(req, res) {
//     const deletedBook = await Book.findByIdAndRemove(req.params.id);
//     res.status(200).json(deletedBook);
// }

function deleteOne(req, res){
    Book.findByIdAndDelete(
        req.params.id,
        function(err, book){
            return index(req, res);
        });
}