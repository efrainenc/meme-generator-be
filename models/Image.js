const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
   
    image:{
        type: String,
    },
       
      text_one_location: {
        top: String,
        left: String,
        bottom: String,
        right: String
       },
      

       text_two_location: {
        top: String,
        left: String,
        bottom: String,
        right: String
       },

}, {timestamps: true})



const Image =  mongoose.model('Image', imageSchema);
module.exports= Image;