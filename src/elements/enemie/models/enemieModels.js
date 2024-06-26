const mongoose = require('mongoose');
const {Schema} = mongoose;

const enemySchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, 
    health: { type: Number, required: true },
    damage: { type: Number, required: true },
    behavior: { type: String, required: true },
    loot: [{ type: Schema.Types.ObjectId, ref: 'Loot' }],
  });
  
  const Enemy = mongoose.model('Enemy', enemySchema);
  module.exports = Enemy;
  