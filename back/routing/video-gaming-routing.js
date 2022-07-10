const express = require('express');
const router = express.Router();
const videoGameController = require('./../controllers/video-gaming-controller');

router.route('/')
    .get(videoGameController.gettAllVideoGames)
    .post(videoGameController.insertVideoGame);
router.route('/:id')
    .get(videoGameController.getVideoGameByID)
    .put(videoGameController.updateVideoGame);
router.route('/d/:id')
    .put(videoGameController.deleteVideoGame);

module.exports = router;