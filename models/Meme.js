const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    tags:{
        type: String,
        

    },
    image:{
        type: String,
        
    },

    text_one: {
        type: String,
       location: {
        top: String,
        left: String,
        bottom: String,
        right: String
       },
        required: [true, 'text is required']
    
    },
    text_two: {
        type: String,
       location: {
        top: String,
        left: String,
        bottom: String,
        right: String
       },
        required: [true, 'text is required']
    
    }

},{timestamps: true})



const Meme =  mongoose.model('Meme', memeSchema);
module.exports= Meme;