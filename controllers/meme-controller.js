const express = require('express')
const router = express.Router();
const { Meme } = require('../models')

//mongoose connection
require('../config/db.connection')

//show all
router.get('/', async (req, res, next) => {
    try {
        const memes = await Meme.find({})
        res.status(200).json(memes)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
   
})

router.post('/', async (req, res, next) =>{
   try {
    const createdMeme = await Meme.create(req.body)
    res.status(201).json(createdMeme)
    
   } catch (error) {
    res.status(400).json(error)
        next();
   }
})


router.get("/:id", async (req, res, next) => {
	try {
        const meme = await Meme.findById(req.params.id)
        res.status(200).json(meme)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

router.delete("/:id", async (req, res, next) => {
	try {
        const deletedMeme = await Meme.findByIdAndRemove(req.params.id)
        res.status(202).json({message:`${deletedMeme}`})
        
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});



router.put("/:id", async (req, res, next) => {
	try {
        const updatedMeme = await Meme.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatedMeme)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

module.exports = router;