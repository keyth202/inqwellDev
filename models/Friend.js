const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    friends:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:'users'
            },
            name:{
                type: String
            },
            avatar:{
                type: String
            },
            date :{
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Friend = mongoose.model('friend', FriendSchema);