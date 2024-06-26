const mongoose = require('mongoose');
const {Schema} = mongoose;

const lootSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    rarity: { type: String, required: true },
  });
  
  const Loot = mongoose.model('Loot', lootSchema);
  module.exports = Loot;
  