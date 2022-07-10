const express = require('express');
const router = express.Router();
const pictureController = require('./../controllers/picture-controller');

router.route('/')
    .post(pictureController.insertPicture);

router.route('/:name/:id')
    .get(pictureController.getPictureByID);

module.exports = router;