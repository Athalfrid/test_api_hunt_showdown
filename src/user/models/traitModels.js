const traitSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    effect: { type: String, required: true },
  });
  
  const Trait = mongoose.model('Trait', traitSchema);
  module.exports = Trait;
  