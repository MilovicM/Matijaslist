
const jewelryRepository = require('./../repositories/jewelry-repository');

const getAllJewelries = async (req, res) => {
    const results = await jewelryRepository.getAllJewelries();
    res.send(results);
}

const getJewelryByID = async (req, res) => {
    const id = req.params.id;
    const results = await jewelryRepository.getJewelryByID(id);
    res.send(results);
}

const insertJewelry = async (req, res) => {
    const id = await jewelryRepository.insertJewelry(req.body);
    res.send({id});
}

const updateJewelry = async (req, res) => {
    const id = req.params.id;
    const results = await jewelryRepository.updateJewelry(req.body, id);
    res.send(results);
}

const deleteJewelry = async (req, res) => {
    const id = req.params.id;
    const results = await jewelryRepository.deleteJewelry(req.body,id);
    res.send(results);
}


module.exports = {getAllJewelries, getJewelryByID, insertJewelry, updateJewelry, deleteJewelry};