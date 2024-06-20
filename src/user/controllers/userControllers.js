const users = [
    { id:1 , name: 'Tom'},
    { id:2 , name: 'Elvis'},
    { id:3 , name: 'Marvolo'},
];

exports.getUsers = (req,res) => {
    res.json(users);
}

exports.getUser = (req,res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if(!user){
        const response = { error : 'User not found' };
        res.json(response);
    }
    res.json(user);
}

exports.createUser = (req,res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
}