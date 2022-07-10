const dbConnection = require('../common/db-connection');

const getPictureByID = async (name, id) => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM picture WHERE table_name = ? AND table_id = ?`,{
        replacements:[name, id]
    })
    return results;
}


const insertPicture = async (picture) => {
    let [results, metadata] = await dbConnection.query(`INSERT INTO picture (src, table_name, table_id) VALUES (?, ?, ?)`,
    {
        replacements:[picture.src, picture.table_name, picture.table_id]
    });
    return results;
}

module.exports = {getPictureByID, insertPicture};