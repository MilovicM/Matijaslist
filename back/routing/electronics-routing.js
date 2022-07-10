const express = require('express');
const router = express.Router();
const electronicsController = require('./../controllers/electronics-controller');

router.route('/')
    .get(electronicsController.getAllElectronics)
    .post(electronicsController.insertElectronic);

router.route('/:id')
    .get(electronicsController.getElectronicsByID)
    .put(electronicsController.updateElectronic);
router.route('/d/:id')
    .put(electronicsController.deleteElectronic);


module.exports = router;