import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onChange} type="text" value={props.task} />
      <button
        onClick={() => props.onAdd(props.task)}
        disabled={props.disableAdd}
        style={{ opacity: props.disableAdd ? 0.5 : 1, cursor: props.disableAdd ? "not-allowed" : "pointer" }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
