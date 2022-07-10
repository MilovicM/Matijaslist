const dbConnection = require('./../common/db-connection');

const getAllElectronics = async () => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM electronics WHERE deleted = 0`);
    return results;
}

const getElectronicsByID = async (id) => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM electronics WHERE id = ? AND deleted = 0`,{
        replacements: [id]
    })

    return results[0];
}


const insertElectronic = async (electronic) => {
    let [results, metadata] = await dbConnection.query(`INSERT INTO electronics (name, price, about, created, updated, cjenkanje, owner, buyer, deleted) 
                                                        VALUES (?, ?, ?, now(), now(), ?, ?, 0, 0)`,{
                                                            replacements:[electronic.name, electronic.price, electronic.about, electronic.cjenkanje, electronic.owner]
                                                        })

    return results;
}


const updateElectronic = async (electronic,id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE electronics SET name = ?, price =?, about = ?, updated = now(), cjenkanje = ?, owner = ?, buyer = ?, deleted = 0  WHERE id = ? `,{
        replacements: [electronic.name, electronic.price, electronic.about, electronic.cjenkanje, electronic.owner, electronic.buyer, id]
    })

    return results;
}

const deleteElectronic = async (electronic,id) => {
    let [results, metadata] = await dbConnection.query(`UPDATE electronics SET name = ?, price =?, about = ?, updated = now(), cjenkanje = ?, owner = ?, buyer = ?, deleted = 1  WHERE id = ? `,{
        replacements: [electronic.name, electronic.price, electronic.about, electronic.cjenkanje, electronic.owner, electronic.buyer, id]
    })

    return results;
}

module.exports = {getAllElectronics, getElectronicsByID, insertElectronic, updateElectronic, deleteElectronic};

