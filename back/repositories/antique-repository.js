const dbConnection = require('../common/db-connection');

const getAllAntiques = async () => {
    let [result, metadata] = await dbConnection.query(`SELECT * FROM antique WHERE deleted = 0`);
    return result;   
}

const getAntiqueByID = async (id) => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM antique WHERE id = ? AND deleted = 0`,{
        replacements: [id]
    })

    return results[0];
}

const getAntiqueByOwner = async (owner) => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM antique WHERE owner = ? `,{
        replacements: [owner]
    })

    return results;
}


const getAntiqueByBuyer = async (buyer) => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM antique WHERE buyer = ? `,{
        replacements: [buyer]
    })

    return results;
}

const insertAntique = async (antique) => {
    let [results, metadata] = await dbConnection.query(`INSERT INTO antique (name, about, price, created, updated, stars, cjenkanje, owner, buyer, deleted) VALUES (?,?,?,now(),now(),0,?,?,0,0)`,
    {
        replacements: [antique.name, antique.about,antique.price,antique.cjenkanje,antique.owner]
    })
    console.log("insert antique => id = ", results);
    return results;
}

const updateAntique = async(antique, id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE antique SET name = ?,
                                           about = ?,
                                           price = ?,
                                           updated = now(),
                                           cjenkanje = ?,
                                           owner = ?,
                                           buyer = ?,
                                           deleted = 0
                                           WHERE id = ?`,{
                                            replacements : [antique.name,antique.about,antique.price,antique.cjenkanje, antique.owner, antique.buyer, id]
                                           }
                                            )
    return results;
}

const deleteAntique = async(antique,id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE antique SET name = ?,
                                           about = ?,
                                           price = ?,
                                           updated = now(),
                                           cjenkanje = ?,
                                           owner = ?,
                                           buyer = ?,
                                           deleted = 1
                                           WHERE id = ?`,{
                                            replacements : [antique.name,antique.about,antique.price,antique.cjenkanje, antique.owner, antique.buyer, id]
                                           }
                                            )
    return results;
}

module.exports = {getAllAntiques, getAntiqueByID, insertAntique, updateAntique, deleteAntique, getAntiqueByOwner, getAntiqueByBuyer};