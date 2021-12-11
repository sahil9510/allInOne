const express = require('express');
const { check } = require('express-validator');

const notesControllers = require('../controllers/note-controllers');

const router = express.Router();

router.get('/:nid', notesControllers.getNoteById);

router.get('/user/:uid', notesControllers.getNotesByUserId);

router.post(
  '/',
  [
    check('text')
      .not()
      .isEmpty(),
      check('date').isLength({min:6}),
     ],
  notesControllers.createNote
);

router.delete('/user/:nid', notesControllers.deleteNote);

module.exports = router;