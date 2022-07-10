const express = require('express');
const router = express.Router();
const jewelryController = require('./../controllers/jewelry-controller');

router.route('/')
    .get(jewelryController.getAllJewelries)
    .post(jewelryController.insertJewelry);

router.route('/:id')
    .get(jewelryController.getJewelryByID)
    .put(jewelryController.updateJewelry);
router.route('/d/:id')
    .put(jewelryController.deleteJewelry);

module.exports = router;

