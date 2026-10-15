import type { Todo } from "@/types";

interface Props {
    todo: Todo;
    currentTab: "active" | "completed";
    toggleTodo: (id:number) => void;
    editTodo: (id: number, newTitle: string) => void;
    deleteTodo: (id: number) => void;
}

function TodoItem({ todo, currentTab, toggleTodo, editTodo, deleteTodo }: Props) {
    const handleEdit = () => {
        const newTitle = prompt("Nhập tên mới:", todo.title);
        if (newTitle) editTodo(todo.id, newTitle);
    };

    return (
        <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
            <div 
                className="todo-content"
                onClick={() => currentTab === "active" && toggleTodo(todo.id)}>
                <i className={`fa-regular ${currentTab === "active" ? "fa-circle" : "fa-circle-check"}`}></i>
                <span>{todo.title}</span>
            </div>
            <div className="action-group">
                <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    );
}

export default TodoItem;