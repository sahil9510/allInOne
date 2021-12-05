import React, {useState, useEffect} from 'react';
import NotesList from './NotesList';
import './KeepNotes.css';
import {nanoid} from 'nanoid';
import SearchBar from './SearchBar';
import noteImage from './images/pencil.png';

const KeepNotes = () => {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: 'first note',
    //   date: '1/12/2021',
    // },
    // {
    //   id: nanoid(),
    //   text: 'second note',
    //   date: '2/12/2021',
    // },
    // {
    //   id: nanoid(),
    //   text: 'third note',
    //   date: '3/12/2021',
    // },
  ]);

  
//  ******* to store notes in local storage 
  useEffect(() => {
    const savedNotes = JSON.parse(
        localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
        setNotes(savedNotes);
    }
}, []);

useEffect(() => {
    localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(notes)
    );
}, [notes]);
// *********************************************

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState('');

  return (
    
    <div className="main">
    <h1 className="heading">Notes <img src={noteImage} className="notes-image" alt="" /> </h1>
      <SearchBar searchHandler={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        addNoteHandler={addNote}
        deleteHandler={deleteNote}
      />
    </div>
  
    
  );
};

export default KeepNotes;
