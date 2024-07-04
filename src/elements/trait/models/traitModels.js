const mongoose = require('mongoose');
const {Schema} = mongoose;

const traitSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true},
    cost: { type: Number, required: true},
    lvlUnlocked: { type: Number, required: true}
  });
  
  const Trait = mongoose.model('Trait', traitSchema);
  module.exports = Trait;
  