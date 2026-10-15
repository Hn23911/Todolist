import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Todo } from "@/types";

import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTab, setCurrentTab] = useState<"active" | "completed">("active");

  const addTodo = (title: string) => {
    if (!title.trim()) return;
    setTodos([...todos, { id: Date.now(), title, isCompleted: false}]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => 
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const editTodo = (id: number, newTitle: string) => {
    setTodos(
      todos.map((t) => (t.id === id ? {...t, title: newTitle } : t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <div className="tabs">
        <button
          className={currentTab === "active" ? "tab active" : "tab"}
          onClick={() => setCurrentTab("active")}
          >
            Chưa hoàn thành
          </button>
          <button
          className={currentTab === "completed" ? "tab active" : "tab"}
          onClick={() => setCurrentTab("completed")}
          >
            Đã hoàn thành
          </button>
      </div>
      <TodoList
        todos={todos}
        currentTab={currentTab}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App
