const multer = require('multer');
const express = require('express');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public'))
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
});

fileUpload = multer({storage: storage});


const uploadRouter = express.Router(); 

uploadRouter.post('/upload',

    fileUpload.single('img'),

    (req, res) => {
        if (!req.file) {
            res.send({
                status: -1,
                msg: 'No file uploaded!'
            })
        }
        else {
            res.send({
                status: 0,
                msg: 'File uploaded',
                filename: req.file.filename
            })
        }
})




module.exports = uploadRouter;