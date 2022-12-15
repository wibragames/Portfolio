import React, {useState} from "react";
import AddTodo from "./components/TodoItem";
import TodoList from "./components/TodoList";


interface TodoItem { 
    name: string;
    completed: boolean;
}

const ToDo = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div>
            <AddTodo addTodo={addTodo}/>
            <TodoList markCompleted={markCompleted} todos={todos}/>
        </div>
    );

}

export default ToDo;