const Trait = require('../models/traitModels');

exports.getTraits = (req,res) => {
    Trait.find()
    .then(traits => res.status(200).json(traits))
    .catch(error => res.status(400).json({error}));
}

exports.getTrait = (req,res) => {
    Trait.findById(req.params.id)
    .then(trait => res.status(200).json(trait))
    .catch(error => res.status(400).json({error}));
}

exports.createTrait = (req,res) => {
    delete req.body._id;
    const trait = new Trait({
        ...req.body
    });
    trait.save()
    .then(()=>res.status(201).json({message: 'Trait enregistré !'}))
    .catch(error => res.status(400).json({error}));
}

exports.deleteTrait = (req,res) => {
    Trait.findByIdAndDelete(req.params._id)
    .then(()=> res.status(200).json({message : 'Trait supprimé !'}))
    .catch(error => res.status(404).json({error}));
}

exports.updateTrait = (req,res) => {
    Trait.findByIdAndUpdate(req.params.id,{...req.body},{new: true})
    .then(trait => {
        if(!trait) {
            return res.status(400).json({error: 'Trait non trouvée !'});
        }
        res.status(200).json(trait);
    })
    .catch(error => res.status(400).json({error}));
    
}