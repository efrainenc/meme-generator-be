const express = require('express')
const router = express.Router();
const { Image } = require('../models')

//mongoose connection
require('../config/db.connection')

//show all
router.get('/', async (req, res, next) => {
    try {
        const image = await Image.find({})
        res.status(200).json(image)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
   
})

router.post('/', async (req, res, next) =>{
   try {
    const createdImage = await Image.create(req.body)
    res.status(201).json(createdImage)
    
   } catch (error) {
    res.status(400).json(error)
        next();
   }
})


router.get("/:id", async (req, res, next) => {
	try {
        const image= await Image.findById(req.params.id)
        res.status(200).json(image)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

router.delete("/:id", async (req, res, next) => {
	try {
        const deletedImage = await Image.findByIdAndRemove(req.params.id)
        res.status(202).json({message:`${deletedImage}`})
        
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});



router.put("/:id", async (req, res, next) => {
	try {
        const updatedImage = await Image.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatedImage)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

module.exports = router;