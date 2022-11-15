import React from 'react';
import '../Components/styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd :(e: React.FormEvent) => void;
}
const InputField = ({todo, setTodo, handleAdd}: Props) => {
  return (
    <form className='input' onSubmit={handleAdd}>
        <input type="input"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        placeholder='Enter the task' className='input-box'></input>
        <button className='input_add' type='submit'>Add</button>
    </form>
  )
}

export default InputField
