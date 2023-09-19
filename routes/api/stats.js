const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {body, validationResult} = require('express-validator');

const Stat = require('../../models/Stat');
const User = require('../../models/User');

router.get('/',auth, async (req, res) => {

    try{
        
        
        res.json({msg:'Got to tools'});
        
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');

    }
    
});

router.post('/points', [auth,[ 
    body('points', 'Points are required' ).not().isEmpty(),

]], async (req,res)=>{

    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
   console.log("Points:",req.body.points);
    try{

        const { points} = req.body;
        const newPoints = new Stat({
            vitalityPoints:{
                points:points
            }});
        console.log("Shifted Points:", newPoints);
        const stat = await newPoints.save();
 
        res.json(stat);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.post('/weight', [auth,[ 
    body('weight', 'Points are required' ).not().isEmpty(),

]], async (req,res)=>{

    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    try{

        const { weight} = req.body;
        const newStat= new Stat({
            weight:{
                amount:weight
            }});
        console.log("Shifted Points:", newStat);
        const stat = await newStat.save();

        res.json(stat);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.post('/workout', [auth,[ 
    body('workout', 'Workout is required' ).not().isEmpty(),

]], async (req,res)=>{

    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
   console.log("Workout:",req.body.workout);
    try{

        const { workout} = req.body;
        const newWorkout = new Stat({
            workout:{
                name:workout.name,
                reps:workout.reps,
                time:workout.time || 0,
            }});
        console.log("Shifted Workout:", newWorkout);
        const stat = await newWorkout.save();
     
        res.json(stat);

    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
router.get('/workouts', auth, async (req, res) => {
    try {
        const workouts = await Stat.workout.find().sort({date:-1});
        res.json(workouts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
     
    }

});


module.exports = router;
