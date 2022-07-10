const pictureRepository = require('./../repositories/picture-repository');


const getPictureByID = async(req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    console.log(id + " " + name);
    const result = await pictureRepository.getPictureByID(name, id);
    
    console.log(result);
    res.send(result);
}

const insertPicture = async (req,res) => {
    const id = await pictureRepository.insertPicture(req.body);
    res.send({id});
}

module.exports = {getPictureByID,insertPicture};