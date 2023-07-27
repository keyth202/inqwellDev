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

    const user = await User.findById(req.user.id).select('-password');
    const stat = await Stat.findById(req.params.id);

    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
   
   
   
    try{
        const{
            vitalityPoints
        } =req.body;
        
        const newPoints={
            vitalityPoints
        }
        //console.warn("We Got here");
        const stats = await Stat.findOne({user: req.user.id});
        //unshift pushes things to the beginning of the array so current education show up first
        profile.education.unshift(newEdu);
        await profile.save();
        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
