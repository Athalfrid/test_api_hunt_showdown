const mongoose = require('mongoose');
const {Schema} = mongoose;

const equipmentSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, 
    description: { type: String, required: true },
    effects: { type: String, required: true },
  });
  
  const Equipment = mongoose.model('Equipment', equipmentSchema);
  module.exports = Equipment;
  