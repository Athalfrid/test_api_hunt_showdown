const mongoose = require('mongoose');
const {Schema} = mongoose;

const weaponSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, 
  damage: { type: Number, required: true },
  lightCaCdamage: { type: Number, required: true },
  heavyCaCdamage: { type: Number, required: true },
  range: { type: Number, required: true },
  ammoCapacity: { type: Number, required: true },
  price: {type: Number, required: true},
  typeMunition: { type: String, required: true}
});

const Weapon = mongoose.model('Weapon', weaponSchema);
module.exports = Weapon;