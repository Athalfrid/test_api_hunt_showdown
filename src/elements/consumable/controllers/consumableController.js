const Consumable = require('../models/consumableModels');

exports.getConsumables = (req,res) => {
    Consumable.find()
    .then(consumable => res.status(200).json(consumable))
    .catch(error => res.status(400).json({error}));
}

exports.getConsumable = (req,res) => {
    Consumable.findOne(req.params.id)
    .then(consumable => res.status(200).json(consumable))
    .catch(error => res.status(400).json({error}));
    
}

exports.createConsumable = (req,res) => {
    delete req.body._id;
    const consumable = new Consumable({
        ...req.body
    });
    consumable.save()
    .then(() => res.status(200).json({message: 'Consommable créé !'}))
    .catch(error => res.status(400).json({error}));
    
}

exports.deleteConsumable = (req,res) => {
    Consumable.deleteOne({id: req.params._id})
    .then(()=> res.status(200).json({message: 'Consommable supprimé !'}))
    .catch(error => res.status(400).json({error}));
    
}

exports.updateConsumable = (req,res) => {
    Consumable.findByIdAndUpdate(req.params.id,{...req.body},{new: true})
    .then(consumable => {
        if(!consumable) {
            return res.status(400).json({error: 'Consommable non trouvé !'});
        }
        res.status(200).json(consumable);
    })
    .catch(error => res.status(400).json({error}));
    
}