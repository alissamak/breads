//import mongoose
const mongoose = require("mongoose");
//append schema to mongoose
const { Schema } = mongoose;
  
//build bread schema
const bakerSchema = new Schema({
  //require field
  name: {
      type: String, 
      required: true,
      enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'],
    },
  startDate: {type: Date, required: true},
  bio: String,
})

//helper methods

//create model to house schema and interact with mongoDB
const Baker = mongoose.model('Baker', bakerSchema);

//export model not schema
module.exports = Baker;