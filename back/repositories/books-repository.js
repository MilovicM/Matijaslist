const dbConnection = require('./../common/db-connection');

const getAllBooks = async () => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM book WHERE deleted = 0`);
    console.log("koliko je delete");
    return results;
}

const getBookByID = async (id) => {
    let [results,metadata] = await dbConnection.query(`SELECT * FROM book WHERE id = ? AND deleted = 0`,{
                                                            replacements:[id]
                                                        })

    return results[0];
}

const insertBook = async (book) => {
    let [results, metadata] = await dbConnection.query(`INSERT INTO book (name, author, releaseDate, price, content, created, updated, cjenkanje, owner, buyer, deleted) VALUES (?,?,?,?,?,now(),now(),?,?,0,0)`,
                                                                        {
                                                                            replacements:[book.name, book.author, book.releaseDate, book.price, book.content,book.cjenkanje,book.owner]
                                                                        })
    return results;
}

const updateBook = async (book, id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE book SET name = ?, author = ?, releaseDate = ?, price = ?, content = ?, updated = now(), cjenkanje= ?, owner = ?, buyer = ?, deleted = 0 WHERE id = ?`,{
        replacements : [book.name, book.author, book.price, book.releaseDate, book.price, book.content, book.cjenkanje, book.owner, book.buyer, id]
    })
    
    return results;
}

const deleteBook = async (book, id) => {
    console.log("Brisem knjigu sa id-em", id);
    let [results, metadata] = await dbConnection.query(`UPDATE book SET name = ?, author = ?, releaseDate = ?, price = ?, content = ?, updated = now(), cjenkanje= ?, owner = ?, buyer = ?, deleted = 1 WHERE id = ?`,{
        replacements : [book.name, book.author, book.price, book.releaseDate, book.price, book.content, book.cjenkanje, book.owner, book.buyer, id]
    })
    
    return results;
}
module.exports = {getAllBooks,getBookByID, insertBook, updateBook, deleteBook};
