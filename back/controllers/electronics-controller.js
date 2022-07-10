
const electronicRepository = require('./../repositories/electronics-repository');

const getAllElectronics = async (req, res) => {
    const results = await electronicRepository.getAllElectronics();
    res.send(results);
}

const getElectronicsByID = async (req, res) => {
    let id = req.params.id;
    const results = await electronicRepository.getElectronicsByID(id);
    res.send(results);
}

const insertElectronic = async (req, res) => {
    const id = await electronicRepository.insertElectronic(req.body);
    res.send({id});
}

const updateElectronic = async (req,res) => {
    let id = req.params.id;
    const results = await electronicRepository.updateElectronic(req.body, id);
    res.send(results);
}

const deleteElectronic = async (req, res) => {
    const id = req.params.id;
    const results = await electronicRepository.deleteElectronic(req.body,id);
    res.send(results);   
}

module.exports = {getAllElectronics, getElectronicsByID, insertElectronic, updateElectronic, deleteElectronic};