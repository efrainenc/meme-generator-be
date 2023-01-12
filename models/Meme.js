const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    tags:{
        type: String,
        

    },
    image:{
        type: mongoose.Types.ObjectId,
        ref: 'Image'
        
    },

    text_one: {
        type: String,
       location: {
        top: String,
        left: String,
        bottom: String,
        right: String
       },
      
    
    },
    text_two: {
        type: String,
       location: {
        top: String,
        left: String,
        bottom: String,
        right: String
       },
        
    
    }

},{timestamps: true})



const Meme =  mongoose.model('Meme', memeSchema);
module.exports= Meme;