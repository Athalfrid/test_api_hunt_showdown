const mongoose = require('mongoose');
const {Schema} = mongoose;

const consumableSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, // e.g., "medkit", "dynamite"
    description: { type: String, required: true },
    effects: { type: String, required: true },
  });
  
  const Consumable = mongoose.model('Consumable', consumableSchema);
  module.exports = Consumable;
  