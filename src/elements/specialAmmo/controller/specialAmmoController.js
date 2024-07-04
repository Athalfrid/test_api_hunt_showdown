const SpecialAmmo = require('../models/specialAmmoModels');

exports.getSpecialAmmos = (req,res) => {
    SpecialAmmo.find()
    .then(specialAmmos => res.status(200).json(specialAmmos))
    .catch(error => res.status(400).json({error}));
}

exports.getSpecialAmmo = (req,res) => {
    SpecialAmmo.findById(req.params.id)
    .then(specialAmmo => res.status(200).json(specialAmmo))
    .catch(error => res.status(400).json({error}));
}

exports.createSpecialAmmo = (req,res) => {
    delete req.body._id;
    const specialAmmo = new SpecialAmmo({
        ...req.body
    });
    specialAmmo.save()
    .then(()=>res.status(201).json({message: 'Munition spéciale enregistrée !'}))
    .catch(error => res.status(400).json({error}));
}

exports.deleteSpecialAmmo = (req,res) => {
    SpecialAmmo.deleteOne({id: req.params._id})
    .then(()=> res.status(200).json({message : 'Munition spéciale supprimée !'}))
    .catch(error => res.status(404).json({error}));
}

exports.updateSpecialAmmo = (req,res) =>{
    res.status(404).json({message: 'Fonctionnalité à ajouter :-)'});
}