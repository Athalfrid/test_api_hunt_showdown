const mongoose = require("mongoose");
const { Schema } = mongoose;

const hunterSchema = new Schema({
  name: { type: String, required: true },
  health: { type: Number, required: true },
  stamina: { type: Number, required: true },
  traits: [{ type: Schema.Types.ObjectId, ref: "Trait" }],
  loadout: {
    primaryWeapon: { type: Schema.Types.ObjectId, ref: "Weapon" },
    secondaryWeapon: { type: Schema.Types.ObjectId, ref: "Weapon" },
    equipment: [{ type: Schema.Types.ObjectId, ref: "Equipment" }],
    consumables: [{ type: Schema.Types.ObjectId, ref: "Consumable" }],
  },
  backstory: { type: String },
});

const Hunter = mongoose.model('Hunter',hunterSchema);
module.exports = Hunter;