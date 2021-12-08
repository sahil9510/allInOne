const mongoose = require('mongoose');

const noteSchema=new mongoose.Schema({
    text: {type: String, required: true},
    date: {type: Date, required: true},
    creator: {type: mongoose.Types.ObjectId, required: true, ref: "User"}
});

module.exports = mongoose.model('Note', noteSchema);