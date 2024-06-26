const mongoose = require('mongoose');
const {Schema} = mongoose;

const weaponSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, 
  damage: { type: Number, required: true },
  lightCaCdamage: { type: Number, required: true },
  havyCaCdamage: { type: Number, required: true },
  range: { type: Number, required: true },
  ammoCapacity: { type: Number, required: true },
  traits: [{ type: Schema.Types.ObjectId, ref: "Trait" }],
});

const Weapon = mongoose.model('Weapon', weaponSchema);
module.exports = Weapon;