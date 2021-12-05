import React from 'react';
import './NotesList.css';
import Note from './Note.js';
import AddNote from './AddNote';

const NotesList = ({notes, addNoteHandler,deleteHandler}) => {
  return (
    <div className="noteslist">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} deleteHandler={deleteHandler} />
       
      ))}
      <AddNote addNoteHandler={addNoteHandler} />
    </div>
  );
};

export default NotesList;
