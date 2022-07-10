
const dbConnection = require('./../common/db-connection');

const gettAllVideoGames = async () => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM videoGame WHERE deleted = 0`);
    return results;
}

const getVideoGameByID = async (id) => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM videoGame WHERE id = ? AND deleted = 0`,{
        replacements: [id]
    })
    return results;
}

const insertVideoGame = async (videoGame) => {
    let [results, metadata] = await dbConnection.query(`INSERT INTO videoGame (name, price, about, created, updated, cjenkanje, owner, buyer, deleted) VALUES (?, ? , ?, now(), now(), ?, ?, 0, 0)`,{
        replacements: [videoGame.name, videoGame.price, videoGame.about, videoGame.cjenkanje, videoGame.owner]
    })
    return results;
} 

const updateVideoGame = async (videoGame, id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE videoGame SET name = ?, price = ?, about = ?, updated = now(), cjenkanje = ?, owner = ?, buyer = ?, deleted = 0 WHERE id = ?`,{
        replacements: [videoGame.name, videoGame.price, videoGame.about, videoGame.cjenkanje ,videoGame.owner, videoGame.buyer, id]
    })
    return results;
}

const deleteVideoGame = async (videoGame, id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE videoGame SET name = ?, price = ?, about = ?, updated = now(), cjenkanje = ?, owner = ?, buyer = ?, deleted = 1 WHERE id = ?`,{
        replacements: [videoGame.name, videoGame.price, videoGame.about, videoGame.cjenkanje ,videoGame.owner, videoGame.buyer, id]
    })
    return results;
}


module.exports = {gettAllVideoGames, getVideoGameByID, insertVideoGame, updateVideoGame, deleteVideoGame};