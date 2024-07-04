const Tool = require('../models/toolModels');

exports.getTools = (req,res) => {
    Tool.find()
    .then(tools => res.status(200).json(tools))
    .catch(error => res.status(400).json({error}));
}

exports.getTool = (req,res) => {
    Tool.findById(req.params.id)
    .then(tool => res.status(200).json(tool))
    .catch(error => res.status(400).json({error}));
}

exports.createTool = (req,res) => {
    delete req.body._id;
    const tool = new Tool({
        ...req.body
    });
    tool.save()
    .then(()=>res.status(201).json({message: 'Outil enregistré !'}))
    .catch(error => res.status(400).json({error}));
}

exports.deleteTool = (req,res) => {
    Tool.deleteOne({id: req.params._id})
    .then(()=> res.status(200).json({message : 'Outil supprimé !'}))
    .catch(error => res.status(404).json({error}));
}

exports.updateTool = (req,res) => {
    Tool.findByIdAndUpdate(req.params.id,{...req.body},{new: true})
    .then(tool => {
        if(!tool) {
            return res.status(400).json({error: 'Outil non trouvée !'});
        }
        res.status(200).json(tool);
    })
    .catch(error => res.status(400).json({error}));
    
}