//Rutas para notas
const express =  require('express');

const router = express.Router();

const noteController = require('../controllers/noteController');

//api
router.post('/', noteController.createNote);
router.get('/', noteController.getNotes);
router.put('/:id', noteController.updateNote);
router.get("/:id", noteController.getNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;