const Weapon = require('../models/weaponsModels');

exports.getWeapons = (req,res) => {
    Weapon.find()
    .then(weapons => res.status(200).json(weapons))
    .catch(error => res.status(400).json({error}));
}

exports.getWeapon = (req,res) => {
    Weapon.findOne({_id: req.params.id})
    .then(weapon => res.status(200).json(weapon))
    .catch(error => res.status(400).json({error}));
}

exports.createWeapon = (req,res) => {
    delete req.body._id;
    const weapon = new Weapon({
        ...req.body
    });
    weapon.save()
    .then(()=>res.status(201).json({message: 'Arme enregistré !'}))
    .catch(error => res.status(400).json({error}));
}

exports.deleteWeapon = (req,res) => {
    Weapon.deleteOne({id: req.params._id})
    .then(()=> res.status(200).json({message : 'Arme supprimé !'}))
    .catch(error => res.status(404).json({error}));
}

exports.updateWeapon = (req,res) => {
    Weapon.findByIdAndUpdate(req.params.id,{...req.body},{new: true})
    .then(weapon => {
        if(!weapon) {
            return res.status(400).json({error: 'Arme non trouvée !'});
        }
        res.status(200).json(weapon);
    })
    .catch(error => res.status(400).json({error}));
    
}