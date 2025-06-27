import React, { useState } from "react";

function ToDoItem({ id, text, done, onToggle, onDelete, onEdit }) {
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  function handleEditSave() {
    onEdit(id, editText);
    setEditing(false);
  }

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className={done ? "done" : ""} onClick={() => onToggle(id)}>
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
          />
        ) : (
          text
        )}
      </span>

      {isEditing ? (
        <button onClick={handleEditSave}>
          <span>Save</span>
        </button>
      ) : (
        <button onClick={() => setEditing(true)}>
          <span>🖊️</span>
        </button>
      )}

      <button onClick={() => onDelete(id)}>
        <span>❌</span>
      </button>
    </li>
  );
}

export default ToDoItem;
