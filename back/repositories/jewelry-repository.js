
const dbConnection = require('./../common/db-connection');

const getAllJewelries = async () => {
    let [results, metadata] = await dbConnection.query(`SELECT * from jewelry WHERE deleted = 0`);
    return results;
}

const getJewelryByID = async (id) => {
    const [results, metadata] = await dbConnection.query(`SELECT * FROM jewelry WHERE id = ? AND deleted = 0`, {
        replacements: [id]
    })

    return results;
}

const insertJewelry = async (jewelry) => {
    let [results, metadata] = await dbConnection.query(`INSERT INTO jewelry (name, price, about, created, updated, cjenkanje, owner, buyer, deleted) VALUES (?, ?, ?, now(), now(), ?, ?, 0, 0)`,{
        replacements : [jewelry.name, jewelry.price, jewelry.about, jewelry.cjenkanje, jewelry.owner]
    })

    return results;
}

const updateJewelry = async(jewelry, id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE jewelry SET name = ? , price = ?, about = ?, updated = now(), cjenkanje = ?, owner = ?, buyer = ?, deleted = 0 WHERE id = ?`,{
        replacements : [jewelry.name, jewelry.price, jewelry.about, jewelry.cjenkanje, jewelry.owner, jewelry.buyer, id]
    })

    return results;
}

const deleteJewelry = async(jewelry,id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE jewelry SET name = ? , price = ?, about = ?, updated = now(), cjenkanje = ?, owner = ?, buyer = ?, deleted = 1 WHERE id = ?`,{
        replacements : [jewelry.name, jewelry.price, jewelry.about, jewelry.cjenkanje, jewelry.owner, jewelry.buyer, id]
    })

    return results;
}

module.exports = { getAllJewelries, getJewelryByID, insertJewelry, updateJewelry, deleteJewelry};