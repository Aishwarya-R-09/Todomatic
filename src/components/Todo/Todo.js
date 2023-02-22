import "../../index.css";
import { useState } from "react";

export default function Todo(props) {
  const [editMode, changeEditMode] = useState(false);
  const [newValue, changeNewValue] = useState(props.name);

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className="todolist">
        <input
          type="checkbox"
          id="checkbox"
          checked={props.completed}
          readOnly={props.completed}
          onChange={() => {
            props.completeTask(props.id);
          }}
        />

        <input
          className={
            editMode
              ? "input"
              : props.completed
              ? "strike no-input"
              : "no-input"
          }
          type="text"
          value={newValue}
          onChange={(event) => {
            changeNewValue(event.target.value);
          }}
          readOnly={!editMode}
        />
      </div>

      {!editMode && (
        <div className="buttons">
          <button
            className="button first"
            id="btn1"
            disabled={props.completed}
            onClick={() => {
              changeEditMode(true);
            }}
          >
            <b>Edit</b>
          </button>

          <button
            className="button"
            id="btn2"
            onClick={() => {
              props.deleteTask(props.id);
            }}
          >
            <b>Delete</b>
          </button>
        </div>
      )}

      {editMode && (
        <div className="buttons">
          <button
            id="btn1"
            className="button first"
            onClick={() => {
              props.saveTask(props.id, newValue);
              changeEditMode(false);
            }}
          >
            <b>Save</b>
          </button>
          <button
            id="btn2"
            className="button"
            onClick={() => {
              changeEditMode(false);
              changeNewValue(props.name);
            }}
          >
            <b>Cancel</b>
          </button>
        </div>
      )}
    </div>
  );
}
