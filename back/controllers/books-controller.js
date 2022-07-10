const bookRepository = require('./../repositories/books-repository');


const getAllBooks = async(req,res) => {
    const results = await bookRepository.getAllBooks();
    res.send(results);
}

const getBookByID = async(req, res) => {
    const id = req.params.id;
    const result = await bookRepository.getBookByID(id);
    res.send(result);
}


const insertBook = async(req, res) => {
    const id = await bookRepository.insertBook(req.body);
    res.send({id});
}

const updateBook = async(req, res) => {
    const id = req.params.id;
    const result = await bookRepository.updateBook(req.body,id);
    res.send(result);
}

const deleteBook = async(req, res) => {
    const result = await bookRepository.deleteBook(req.body,req.params.id);
    res.send(result);
}

module.exports = {getAllBooks, getBookByID, insertBook, updateBook, deleteBook};

