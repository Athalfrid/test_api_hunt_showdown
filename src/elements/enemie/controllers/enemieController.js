const Enemie = require('../models/enemieModels');

exports.getEnemies = (req,res) => {
    Enemie.find()
    .then(enemies => res.status(200).json(enemies))
    .catch(error => res.status(400).json({error}));
}

exports.getEnemie = (req,res) => {
    Consumable.findById(req.params.id)
    .then(enemie => res.status(200).json(enemie))
    .catch(error => res.status(400).json({error}));
}

exports.createEnemie = (req,res) => {
    delete req.body._id;
    const enemie = new Enemie({
        ...req.body
    });
    enemie.save()
    .then(()=>res.status(201).json({message: 'Enemie enregistré !'}))
    .catch(error => res.status(400).json({error}));
}

exports.deleteEnemie = (req,res) => {
    Enemie.deleteOne({id: req.params._id})
    .then(()=> res.status(200).json({message : 'Enemie supprimé !'}))
    .catch(error => res.status(404).json({error}));
}

exports.updateEnemie = (req,res) => {
    Enemie.findByIdAndUpdate(req.params.id,{...req.body},{new: true})
    .then(enemie => {
        if(!enemie) {
            return res.status(400).json({error: 'Enemie non trouvée !'});
        }
        res.status(200).json(enemie);
    })
    .catch(error => res.status(400).json({error}));
    
}