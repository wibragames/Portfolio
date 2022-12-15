import React, {useState} from "react";
//import {AddTodo} from "./components/TodoItem"


interface TodoItem { 
    name: string;
    completed: boolean;
}

const App = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div>
            <div>
                <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                <button onClick={() => addTodo(todo)}>Add</button>
            </div>
            <div>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
                        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default App;