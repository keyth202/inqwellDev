const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    weight:[
        {
            amount: {
                type: Number,
            },
            date:{
                type: Date,
                default: Date.now
            }
            
        }
    ],
    workout:[       
        {
            name: {
            type: String,
            },
            reps: {
                type: Number,
            },
            date : {
                type: Date,
                default: Date.now
            }
        }
    ],
    calories:[
        {
            amount: {
                type: Number,
            },
            date:{
                type: Date,
                default: Date.now
            }
            
        }
    ],
    steps:[
        {
            amount: {
                type: Number,
            },
            date:{
                type: Date,
                default: Date.now
            }
            
        }
    ],
    vitalityPoints:[
        {
            amount: {
                type: Number,
            },
            date:{
                type: Date,
                default: Date.now
            }
            
        }
    ],
    date:{
        type: Date,
        default: Date.now
    },
    totalVitalityPoints:{
        type: Number,
    },
});

module.exports = Stat = mongoose.model('stat', StatSchema);