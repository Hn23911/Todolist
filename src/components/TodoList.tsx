import TodoItem from "./TodoItem";
import type { Todo } from "@/types";

interface Props {
    todos: Todo[];
    currentTab: "active" | "completed";
    toggleTodo: (id: number) => void;
    editTodo: (id: number, newTitle: string) => void;
    deleteTodo: (id: number) => void;
}

function TodoList({todos, currentTab, toggleTodo, editTodo, deleteTodo }: Props) {
    const filtered = currentTab === "active"
        ? todos.filter((t) => !t.isCompleted)
        : todos.filter((t) => t.isCompleted);
    
    return (
        <ul className="todo-list">
            {filtered.map((todo) => (
            <TodoItem
                key={todo.id}
                todo= {todo}
                currentTab={currentTab}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
            />
            ))}
        </ul>
    );
}

export default TodoList;