import React, {useState} from "react";

interface AddTodoProps {
    addTodo: (todo: string) => void;
}

const AddTodo = ({addTodo} : AddTodoProps) => {
    const [todo, setTodo] = useState("");

    const handleClick = () => {
        addTodo(todo);
        setTodo("");
    }

    return (
        <div>
            <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default AddTodo;