const hunters = [];

exports.getHunters = (req,res) => {
    res.json(hunters);
}

exports.getHunters = (req,res) => {
    const hunterId = parseInt(req.params.id,10);
    const hunter = hunters.find(h => h.id === hunterId);
    if(!hunter) {
        const response = { error : 'Hunter not found'};
        res.json(response);
    };
    res.json(hunter);
}

exports.createHunter = (req,res) => {
    const newHunter = req.body;
    hunters.push(newHunter);
    res.status(201).json(newHunter);
}


//update existing hunter

//delete existing hunter