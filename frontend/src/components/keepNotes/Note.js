import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import './Note.css';

const Note = ({id, text, date, deleteHandler}) => {
  return (
    <div className="note">
      <span className="span-note">{text} </span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => deleteHandler(id)}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Note;
