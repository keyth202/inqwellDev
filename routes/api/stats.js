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
        /*const profile = await Stat.findOne({user: req.user.id});

        if (!profile) {
            return res.status(404).json({ errors: [{ msg: 'Profile not found' }] });
        }
        */
        const { points} = req.body;
        const newPoints = new Stat({
            vitalityPoints:{
                points:points
            }});
        console.log("Shifted Points:", newPoints);
        const stat = await newPoints.save();
        //profile.vitalityPoints.unshift(newPoints);
        //await profile.save();
        res.json(stat);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
