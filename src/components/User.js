import React from "react";
import "./user.css";
import { useState } from "react";
const User = ({
  id,
  title,
  completed,
  onDelete,
  checkComplete,
  handleEditTodos,
}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);

  // edit function
  const handleDelete = () => {
    onDelete(id);
  };

  // edit function
  const handleOnEdit = () => {
    setOnEdit(true);
  };
  // save function
  const handleSave = () => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(title);
    }
  };

  // if edit mode on
  if (onEdit) {
    return (
      <div className="list">
        <div className="listItems">
          <input
            id={id}
            type="text"
            value={editValue}
            name="editValue"
            onChange={(e) => setEditValue(e.target.value.toLocaleLowerCase())}
          />
        </div>

        <span>
          <div className="buttons">
            <button id="edit" onClick={() => handleSave(id)}>
              Save
            </button>
            <button id="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </span>
      </div>
    );
  }
  // if edit mode off
  else {
    return (
      <div className="list">
        <div className="listItems">
          <label htmlFor={id} className={completed ? "active" : ""}>
            <input
              id={id}
              type="checkbox"
              checked={completed}
              onChange={() => checkComplete(id)}
            />
            {title}
          </label>
        </div>

        <span>
          <div className="buttons">
            <button id="edit" onClick={handleOnEdit} disabled={completed}>
              Edit
            </button>
            <button id="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </span>
      </div>
    );
  }
};

export default User;
