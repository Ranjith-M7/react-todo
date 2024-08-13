import React, { useState } from "react";

const generateId = () => {
  return Math.floor(Math.random() * 1000);
};

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );

    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-content-center vh-100"
        style={{ backgroundColor: "blueviolet" }}
      >
        <div
          className="p-5"
          style={{
            backgroundColor: "white",
            margin: "auto",
          }}
        >
          <input
            type="text"
            placeholder="Enter your task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>

          <ul>
            {todos.map(({ text, id }) => (
              <li key={id}>
                <span>{text}</span>
                <button className="close-button" onClick={() => removeTodo(id)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
