const express = require('express')
const router = express.Router();
const booksCtrl = require('../../controllers/books');

router.get('/',booksCtrl.index);
router.get('/:id', booksCtrl.show);
/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/', checkAuth, booksCtrl.create);
router.put('/:id', checkAuth, booksCtrl.update);
router.delete('/:id', checkAuth, booksCtrl.delete);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;