const Hunter = require('../models/hunterModels');

exports.getHunters = (req,res) => {
    Hunter.find()
    .then(hunters => res.status(200).json(hunters))
    .catch(error => res.status(400).json({error}));
}

exports.getHunter = (req,res) => {
    Hunter.findOne({_id: req.params.id})
    .then(hunter => res.status(200).json(hunter))
    .catch(error => res.status(400).json({error}));
}

exports.createHunter = (req,res) => {
    delete req.body._id;
    const hunter = new Hunter({
        ...req.body
    });
    hunter.save()
    .then(()=>res.status(201).json({message: 'Chasseur enregistré !'}))
    .catch(error => res.status(400).json({error}));
}

exports.deleteHunter = (req,res) => {
    Hunter.deleteOne({id: req.params._id})
    .then(()=> res.status(200).json({message : 'Chasseur supprimé !'}))
    .catch(error => res.status(404).json({error}));
}


//update existing hunter
