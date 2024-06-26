const  mongoose = require("mongoose");
const {Schema} = mongoose;

const specialAmmoSchema = new Schema({
  name: { type: String, required: true },
  effect: {type: String, required: true},
  ammoSize: {type: String, required: true},
  dammageUpdate: {type: Number, required: true},
  dammageZone: {type: Number, required: false},
  ammoCapacityUpdate: {type: Number, required: true}
});

const SpecialAmmo = mongoose.model('SpecialAmmo', specialAmmoSchema);
module.exports = SpecialAmmo;