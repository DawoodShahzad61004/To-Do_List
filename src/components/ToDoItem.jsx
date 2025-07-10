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

      <div className="action-buttons">
        {isEditing ? (
          <button onClick={handleEditSave} className="text-button">
            <span>Save</span>
          </button>
        ) : (
          <button onClick={() => setEditing(true)} className="edit-button">
            <span role="img" aria-label="edit">
              🖊️
            </span>
          </button>
        )}

        <button onClick={() => onDelete(id)}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
