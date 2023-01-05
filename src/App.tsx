import React,{useState} from 'react';

import './App.css';
import { InputField } from './components/InputField';
import {Note} from './components/model'
import { NoteList } from './components/NoteList';
const App: React.FC = () => {

  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAdd = ( e: React.FormEvent) =>{
    e.preventDefault();

    if(note){
      setNotes([...notes, {id: Date.now(), note, isDone: false}]);
      setNote("");
    }
  }
  console.log(notes)
  return (
    <div className="App">
        <span className='heading'>Notify</span>
        <InputField  note ={note} setNote ={setNote} handleAdd={handleAdd}/>
        <NoteList notes={notes} setNotes={setNotes} />

    </div>
  );
}

export default App;
