const express = require('express');
const router = express.Router();
const booksController = require('./../controllers/books-controller');

router.route('/')
    .get(booksController.getAllBooks)
    .post(booksController.insertBook);

router.route('/:id')
    .get(booksController.getBookByID)
    .put(booksController.updateBook);
router.route('/d/:id')
    .put(booksController.deleteBook);

module.exports = router;