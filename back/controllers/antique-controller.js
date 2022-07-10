const dbConnection = require('./../common/db-connection');
const antiquesRepository = require('./../repositories/antique-repository');


const getAllAntiques = async(req,res) => {
    const results = await antiquesRepository.getAllAntiques();
    res.send(results);
}

const getAntiqueByID = async(req, res) => {
    const id = req.params.id;
    const result = await antiquesRepository.getAntiqueByID(id);
    res.send(result);
}

const getAntiqueByOwner = async(req, res) => {
    const owner = req.params.owner;
    const result = await antiquesRepository.getAntiqueByOwner(owner);
    res.send(result);
}

const getAntiqueByBuyer = async(req, res) => {
    const buyer = req.params.buyer;
    const result = await antiquesRepository.getAntiqueByBuyer(buyer);
    res.send(result);
}

const insertAntique = async(req, res) => {
    const id = await antiquesRepository.insertAntique(req.body);
    res.send({id});
}

const updateAntique = async(req, res) => {
    const id = req.params.id;
    const result = await antiquesRepository.updateAntique(req.body,id);
    res.send(result);
}

const deleteAntique = async(req, res) => {
    const result = await antiquesRepository.deleteAntique(req.body,req.params.id);
    res.send(result);
}

module.exports = {getAllAntiques, getAntiqueByID, insertAntique, updateAntique, deleteAntique, getAntiqueByOwner, getAntiqueByBuyer};

