const { default: mongoose } = require("mongoose");

const weaponSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, 
  damage: { type: Number, required: true },
  range: { type: Number, required: true },
  ammoCapacity: { type: Number, required: true },
  traits: [{ type: Schema.Types.ObjectId, ref: "Trait" }],
});

const Weapon = mongoose.model('Weapon', weaponSchema);
module.exports = Weapon;