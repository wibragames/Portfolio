import React, {useState} from "react";

interface TodoItem { 
    name: string;
    completed: boolean;
}

interface TodoListProps {
    todos: TodoItem[];
    markCompleted: (index: number, completed: boolean) => void;
}

const TodoList = ({todos, markCompleted} : TodoListProps)  => {
    return (
    <div>
        {todos.map((todo, index) => (
            <TodoListItem key={index} todo={todo} markCompleted={(completed) => markCompleted(index,completed)}/>
        ))}
    </div>
    )
}

interface TodoListItemProps {
    todo: TodoItem,
    markCompleted: (completed: boolean) => void;
}

const TodoListItem = ({todo, markCompleted} : TodoListItemProps) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(event.target.checked)}/>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
        </div>
    )
}

export default TodoList;