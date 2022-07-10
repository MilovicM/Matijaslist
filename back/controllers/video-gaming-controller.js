const videoGameRepository = require('./../repositories/video-gaming-repository');

const gettAllVideoGames = async(req, res) => {
    const result = await videoGameRepository.gettAllVideoGames();
    res.send(result);
}

const getVideoGameByID = async(req, res) => {
    const id = req.params.id;
    const result = await videoGameRepository.getVideoGameByID(id);
    res.send(result);
}

const insertVideoGame = async(req, res) => {
    const id = await videoGameRepository.insertVideoGame(req.body);
    res.send({id});
}

const updateVideoGame = async(req, res) => {
    const id = req.params.id;
    const result = await videoGameRepository.updateVideoGame(req.body, id);
    res.send(result);
}

const deleteVideoGame = async(req, res) => {
    const id = req.params.id;
    const result = await videoGameRepository.deleteVideoGame(req.body,id);
    res.send(result);
}

module.exports = {gettAllVideoGames, getVideoGameByID, insertVideoGame, updateVideoGame, deleteVideoGame};