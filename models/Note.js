const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Note', NoteSchema);