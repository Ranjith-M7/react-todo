import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const generateId = () => {
  return Math.floor(Math.random() * 1000);
};

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Load todos from local storage when component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos.length !== 0) setTodos(storedTodos);
  }, []);

  // save todos to localstorage whenever "todos" changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = () => {
    setTodos(
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    toast.success("Task added successfully !");
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    toast.error("Task deleted successfully !");
  };

  return (
    <>
      <div
        id="todo"
        className="d-flex justify-content-center align-items-center vh-100"
      >
        <div
          className="p-3 shadow border"
          style={{
            width: "325px",
            borderRadius: "25px",
          }}
        >
          <h3 className="text-white mb-3">Todo App</h3>
          <div className="d-flex justify-content-around mb-4">
            <input
              type="text"
              placeholder="Enter the task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="submit-button" onClick={handleSubmit}>
              +
            </button>
          </div>

          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <button
                  className="close-button"
                  onClick={() => removeTodo(todo.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Todo;
