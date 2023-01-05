import React from 'react';
import { Note } from './model';
import SingleNote from './SingleNote';
import "./style.css";

interface Props{
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export const NoteList: React.FC<Props> = ({notes, setNotes}) => {
  return (
    <div className='notes'>
        {notes.map((note) => (
            <SingleNote 
                note={note}    
                key={note.id}
                notes={notes}
                setNotes={setNotes}/>     
        )

        )}
    </div>
  )
}
