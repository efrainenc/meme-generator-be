const express = require('express')
const router = express.Router();
const { Meme } = require('../models')

//mongoose connection
require('../config/db.connection')

//show all
router.get('/', async (req, res, next) => {
    try {
        const people = await People.find({})
        res.status(200).json(people)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
   
})

router.post('/', async (req, res, next) =>{
   try {
    const createdPerson = await People.create(req.body)
    res.status(201).json(createdPerson)
    
   } catch (error) {
    res.status(400).json(error)
        next();
   }
})


router.get("/:id", async (req, res) => {
	try {
        const person = await People.findById(req.params.id)
        res.status(200).json(person)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

router.delete("/:id", async (req, res) => {
	try {
        const deletedPerson = await People.findByIdAndRemove(req.params.id)
        res.status(202).json({message:`${deletedPerson}`})
        
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});



router.put("/:id", async (req, res, next) => {
	try {
        const updatedPerson = await People.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatedPerson)
    } catch (error) {
        res.status(400).json(error)
        next();
    }
});

module.exports = router;