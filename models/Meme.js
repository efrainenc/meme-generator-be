const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    tags:{
        type: String,
        

    },
    image:{
        type: mongoose.Types.ObjectId,
        ref: 'Image'
        
    },
    text_one:{
        type:String
    },
    text_two: {
        type: String
    }

 
        
    
    

},{timestamps: true})



const Meme =  mongoose.model('Meme', memeSchema);
module.exports= Meme;