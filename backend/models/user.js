const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name : {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    notes: [{type: mongoose.Types.ObjectId, required: true, ref: 'Note'}]
});

module.exports = mongoose.model("User",UserSchema);



