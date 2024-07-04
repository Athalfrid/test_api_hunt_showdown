const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { randomString } = require("../../../../config.json");

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};

exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }));
};

exports.createUser = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        role: 'user'
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteUser = (req, res) => {
  User.deleteOne({ id: req.params._id })
    .then(() => res.status(200).json({ message: "Utilisateur supprimé !" }))
    .catch((error) => res.status(404).json({ error }));
};

exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Email incorrecte !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Mot de passe incorrecte !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id,role:user.role }, randomString, {
              expiresIn: "24h",
            }),
            role:user.role,
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
