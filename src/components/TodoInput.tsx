import { useState } from "react";

interface Props {
    addTodo: (title: string) => void;
}

function TodoInput({ addTodo }: Props) {
    const [value, setValue] = useState("");

    const handleAdd = () => {
        addTodo(value);
        setValue("");
    };

    return (
        <div className="todo-input">
            <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Nhập công việc ..."
            />
            <button onClick={handleAdd}>+</button>
        </div>
    );
}

export default TodoInput;