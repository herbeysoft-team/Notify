import React, { useRef } from 'react'
import "./style.css"
interface Props{
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ( {note, setNote, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)
return (
    <form className='input' onSubmit={ (e) => {
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input 
            ref={inputRef}
            type="input" 
            value = {note}
            onChange = { (e) => setNote(e.target.value)}
            placeholder="Enter a note" 
            className='input__box'/>
        <button className='input_submit' type='button' onClick={handleAdd}>GO</button>

    </form>
  )
}
