const Loot = require("../models/lootModels");

exports.getLoots = (req, res) => {
  Loot.find()
    .then((loots) => res.status(200).json(loots))
    .catch((error) => res.status(400).json({ error }));
};

exports.getLoot = (req, res) => {
  Loot.findById(req.params.id)
    .then((loot) => res.status(200).json(loot))
    .catch((error) => res.status(400).json({ error }));
};

exports.createLoot = (req, res) => {
  delete req.body._id;
  const loot = new Loot({
    ...req.body,
  });
  loot
    .save()
    .then(() => res.status(201).json({ message: "Loot enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteLoot = (req, res) => {
  Loot.deleteOne({ _id: req.params.id })
  .then(() => res.status(200).json({message: 'Loot supprimé !'}))
  .catch(error => res.status(400).json({ error }));
};

exports.updateLoot = (req,res) => {
    Loot.findByIdAndUpdate(req.params.id, {...req.body},{new: true})
    .then(loot => {
        if(!loot) {
            return res.status(400).json({error: 'Loot non trouvé !'});
        }
        re.status(200).json(loot)
    })
    .catch(error => res.status(400).json({error}))
}
