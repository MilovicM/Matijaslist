const express = require('express');
const router = express.Router();
const antiquesController = require('./../controllers/antique-controller');

router.route('/')
    .get(antiquesController.getAllAntiques)
    .post(antiquesController.insertAntique);

router.route('/:id')
    .get(antiquesController.getAntiqueByID)
    .put(antiquesController.updateAntique);
router.route('/d/:id')
    .put(antiquesController.deleteAntique);

router.route('/o/:owner')
    .get(antiquesController.getAntiqueByOwner);

router.route('/b/:buyer')
    .get(antiquesController.getAntiqueByBuyer);

module.exports = router;
