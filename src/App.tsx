import React, {FormEvent, useState} from 'react';
import './App.css';
import {Todo, Todolist} from "./interfaces";
import {nanoid} from "nanoid";



function App() {
    const [todos,setTodos] = useState<Todolist>([]);
    const [input,setInput] = useState("");



    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        const newTodo: Todo = {
            id: nanoid(),
            title: input,
            checked: false
        };

        e.preventDefault();
        setTodos([...todos, newTodo]);
        setInput("");


    }
    const handleDelete = (id: string) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);

    };




  return (
      <>
      <h1>Форум</h1>
    <body>
    <div className="App">
     <form  onSubmit={handleSubmit}>
          <input placeholder="добавить пост"   type="text" value={input} onChange={e => setInput(e.target.value)}/>
          <button type="submit">Yep</button>

     </form>
        <ul>
            {todos.map(todo => <li>
                {todo.title}
                <button onClick={() => handleDelete(todo.id)}>❌</button>
            </li>)}

        </ul>
    </div>
    </body>
      </>
  );
}

export default App;
