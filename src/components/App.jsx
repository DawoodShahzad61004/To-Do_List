import React, { useState, useEffect } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setList] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setList(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick(inputText) {
    if (inputText.trim() === "") return;

    const isDuplicate = taskList.some((taskObj) => taskObj.text === inputText);
    if (isDuplicate) {
      showToast("Task already exists!");
      return;
    }

    setList((prev) => [...prev, { text: inputText, done: false }]);
    setTask("");
  }

  function deleteItem(id) {
    setList((prev) => prev.filter((_, index) => index !== id));
  }

  function toggleDone(id) {
    setList((prev) =>
      prev.map((item, index) =>
        index === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function editItem(id, newText) {
    setList((prev) =>
      prev.map((item, index) =>
        index === id ? { ...item, text: newText } : item
      )
    );
  }

  function clearAll() {
    setList([]);
  }

  const isDuplicate = taskList.some((taskObj) => taskObj.text === task);
  const disableAdd = task.trim() === "" || isDuplicate;

  const [toast, setToast] = useState("");

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  return (
    <div>
      {toast && <div className="toast">{toast}</div>}
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>

        <button onClick={clearAll} style={{ marginBottom: "10px" }}>
          <span>Clear All</span>
        </button>

        <InputArea
          onAdd={handleClick}
          task={task}
          onChange={handleChange}
          disableAdd={disableAdd}
        />

        <ul>
          {taskList.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item.text}
              done={item.done}
              onToggle={toggleDone}
              onDelete={deleteItem}
              onEdit={editItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
