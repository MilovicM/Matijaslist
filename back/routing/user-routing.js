const express = require('express');
const userController = require('./../controllers/user-controller');
const router = express.Router();

router.get('/user/:email/:password', userController.getUserByEmailAndPassword);
router.post('/login', userController.login);
router.post('/user', userController.insertUser);

router.route('/user/:email')
    .get(userController.getUserByEmail)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;

//http://localhost:3000/user/matijamilovic999@gmail.com/matija123 - RADI
//http://localhost:3000/login - radi
//http://localhost:3000/user/proba2@gmail.com - delete radi
//http://localhost:3000/user/probnimail@gmail.com - put radi