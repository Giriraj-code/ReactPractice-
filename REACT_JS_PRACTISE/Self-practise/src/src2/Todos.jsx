import React from 'react'
import { useState } from 'react'

 function Todo(){
        const initialTodo = [];
        for(let i = 0; i<= 50; i++){
            initialTodo.push({
                id:i,
                text:'Item' + (i + 1)
            });
        }
        return initialTodo;
    }
const Todos = () => {
    const [todos, setTodos] = useState(Todo)
    const [text, setText] = useState('')
   
  return (
  <>
  <input type="text"
  value={text}
  onChange={e => setText(e.target.value)} />
  <button onClick={()=>{
    setText('')
    setTodos([{
        id:todos.length,
        text: text
    },...todos])
  }}>Add</button>

  <ul>
    {todos.map(item => (
        <li key={item.id}>
            {item.text}
        </li>
    ))}
  </ul>
  <button onClick={() =>{
    
  }}>Delete</button>
  </>
  )
}

export default Todos