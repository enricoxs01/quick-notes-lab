const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// GET /api/notes
//router.get('/', notesCtrl.index);

//POST /api/notes/new to add a new note
router.post('/new', notesCtrl.create)

module.exports = router;