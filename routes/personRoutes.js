const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.post('/', async (req, res) => {
   try {
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('Person data saved successfully!');
        res.status(200).json(response);
 
   } catch(err){
        console.log('Error saving person data: ', err);
        res.status(500).json({error: 'Internal server error'})
   }
})

router.get('/', async (rea, res) => {
    try {
        const data = await Person.find();
        console.log('Person data fetched.');
        res.status(200).json(data);
    } catch(err){
        console.log('Error saving person data: ', err);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.get('/:workType', async(req, res) => {
    try {
        const workType = req.params.workType;
        if(workType === 'chef' || workType === 'waiter' || workType === 'manager'){
            const response = await Person.find({work: workType});
            console.log(response);
            console.log('person with worktype found.')
            res.status(200).json(response);
        }else{
            res.status(404).json({error: "Invalid work type"});
        }
    }catch(err){
        console.log('Error saving person data: ', err);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.put('/:id', async(req, res) => {
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        })

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('Person data updated successfully.');
        res.status(200).json(response);
    } catch(err){
        console.log('Error updating person data: ', err);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('Person data deleted successfully.');
        res.status(200).json({message: 'Person deleted successfully'});
    }catch(err){
        console.log('Error deleting person data: ', err);
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router;