const express = require('express')
const router = express.Router();
const booksCtrl = require('../../controllers/books');

router.get('/', booksCtrl.index);
router.post('/', booksCtrl.create);
router.get('/:id', booksCtrl.show);
router.put('/:id', booksCtrl.update);
router.delete('/:id', booksCtrl.delete);



module.exports = router;