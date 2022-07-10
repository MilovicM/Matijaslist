const dbConnection = require('../common/db-connection');


const getUserByEmailAndPassword = async (email,password) => {
    let [results, metadata] = await dbConnection.query(`SELECT * FROM user WHERE email = ? AND password = ?`,{
        replacements: [email,password]
    })
    return results;
}

const getUserByEmail = async(email) =>{
    let [results, metadata] = await dbConnection.query(`SELECT * FROM user WHERE email = ?`,{
        replacements:[email]
    })
    return results;
}


const insertUser = async (user) => {
    let [results, metadata] = await dbConnection.query(`INSERT INTO user (email, password, firstName, lastName, admin, balance) VALUES (?,?,?,?,0,?)`,
    {
        replacements: [user.email, user.password, user.firstName, user.lastName,user.balance]
    })
    return results;
}

const updateUser = async(user, email) => {
    let [results, metadata] = await dbConnection.query(`UPDATE user SET
                                           password = ?,
                                           firstName = ?,
                                           lastName = ?,
                                           admin = ?,
                                           balance = ?
                                           WHERE email = ?`,{
                                            replacements : [user.password, user.firstName, user.lastName, user.admin, user.balance, email]
                                           }
                                            )
    return results;
}

// const setUserBalanceByEmail = async (email,balance) => {
//     let [resultsB, metadataB] = await dbConnection.query(`SELECT balance FROM user WHERE email = ? AND delete = 0`,{
//         replacements:[email]
//     })
//     console.log("Prosli balans je ", resultsB);
//     let [results, metadata] = await dbConnection.query(`UPDATE user SET balance = ? WHERE email = ? `,{
//         replacements: [balance + resultsB, email]
//     })
//     return results;
// }

const deleteUser = async(email) => {
    let [results, metata] = await dbConnection.query(`DELETE FROM user WHERE email = ?`,
                        {
                            replacements:[email]
                        });
    return results;
}

module.exports = {getUserByEmailAndPassword, insertUser, updateUser, deleteUser, getUserByEmail};