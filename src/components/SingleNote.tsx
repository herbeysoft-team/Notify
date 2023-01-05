import React from 'react'
import { Note } from './model';

type Props = {
    note: Note,
    notes: Note[],
    setNotes:  React.Dispatch<React.SetStateAction<Note[]>>;

}
const SingleNote: React.FC<Props>  = ({note, notes, setNotes}) => {
  return (
    <form className='notes__single'>
        <span className='notes__single--text'>{note.note}</span>
    </form>
  )
}

export default SingleNote