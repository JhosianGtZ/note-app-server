const {
    json
} = require("express");

const Note = require('../models/Note');


exports.createNote = async (req, res) => {
    try {
        let note;
        //Crear nota
        note = new Note(req.body);

        await note.save();
        res.send(note);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getNotes = async (req, res) => {
    
    try {
        let sort = {};
        sort[req.params.sort] = parseInt(req.params.order); 
        const notes = await Note.find({}).sort(sort);
        res.json(notes);

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }
}




exports.getNotesDate = async (req, res) => {

    try {

        const notes = await Note.find({}).sort({date: 1});
        res.json(notes);

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getNotesTitle = async (req, res) => {

    try {

        const notes = await Note.find({}).sort({title: 1});
        res.json(notes);

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.updateNote = async (req, res) => {
    try {
        const {
            title,
            text,
            tag,
            date,
            order,
        } = req.body;

        let note = await Note.findById(req.params.id);
        if (!note) {
            res.status(404).json({
                msg: "Note doesn't exist"
            });
        }

        note.title = title;
        note.tag = tag;
        note.text = text;
        note.date = date;
        note.order = order;

        note = await Note.findOneAndUpdate({
            _id: req.params.id
        }, note, {
            new: true
        })
        res.json(note);

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');

    }
}

exports.getNote = async (req, res) => {
    try {
        let note = await Note.findById(req.params.id)
        if (!note) {
            res.status(404).json({
                msg: "Note doesn't exist"
            });
        }else{
            res.status(200).json(note);
        }
    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');

    }
}

exports.deleteNote = async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);

        if (!note) {
            res.status(404).json({
                msg: 'No existe la nota'
            })
        }

        await Note.findOneAndRemove({ _id: req.params.id })
        res.json({
            msg: 'Nota eliminado con exito'
        })

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}