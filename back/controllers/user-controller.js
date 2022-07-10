//select * from user where email = ? and password = ? -> unutar rep
const jwt = require('jsonwebtoken');
const userRepository = require("./../repositories/user-repository");

const getUserByEmailAndPassword = async(req,res) =>{
    const email = req.params.email;
    const password = req.params.password;
    const result = await userRepository.getUserByEmailAndPassword(email,password);
    res.send(result);
}

const insertUser = async(req,res) =>{
    const result = await userRepository.insertUser(req.body);
    res.send({token});
}

const updateUser = async(req,res) =>{
    const email = req.body.email;
    const result = await userRepository.updateUser(req.body,email);
    res.send(result);
}

const getUserByEmail = async(req,res) => {
    const email = req.params.email;
    console.log("JEBENI EMAIL JE ", email);
    const result = await userRepository.getUserByEmail(email);
    res.send(result);
}


const deleteUser = async(req,res) =>{
    const result = await userRepository.deleteUser(req.params.email);
    res.send(result);
}

const login = async(req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const result = await userRepository.getUserByEmailAndPassword(email,password);
    
    let returnValue = {token: null, msg: "", status: 200};

    if(typeof result[0] === 'undefined'){
        returnValue.msg = "Incorrect email/password";
        res.send(returnValue);
        return;
    }

    console.log("RESULT[0] = ", result[0]);

    let toSend = {email : result[0].email, password : result[0].password, firstName : result[0].firstName, lastName : result[0].lastName, balance: result[0].balance, admin : result[0].admin};
    console.log(toSend);
    jwt.sign(toSend, 'SECRET', (err,token) => {
        returnValue.token = token;
        res.send(returnValue);
    },{expiresIn: '1h'});

}

module.exports = {login, getUserByEmailAndPassword,insertUser,updateUser,deleteUser, getUserByEmail};