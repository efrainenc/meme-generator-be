const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    tags:{
        type: String,
        

    },
    image:{
        type: mongoose.Types.ObjectId,
        ref: 'Image'
        
    },

 
        
    
    

},{timestamps: true})



const Meme =  mongoose.model('Meme', memeSchema);
module.exports= Meme;