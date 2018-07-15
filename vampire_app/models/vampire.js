console.log('HI')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  //write your schema fields here
  name: { type: String, require: true},
  hair_color: { type: String, default: 'blonde'},
  eye_color: String,
  dob: Date,
  loves: [String],
  location: { type: String },
  gender: { type: String },
  victims: { type: Number, min: 0},
});

// injects model into mongodb
const Vampires = mongoose.model('Vampires', vampireSchema);

// export it 'Vampire'
module.exports = Vampires;