import React from "react";

const Notes = (props) => {
  return (
    <>
      <h1 className="note-title">{props.title}</h1>
      <p className="note-content">{props.content}</p>
      <button
        type="submit"
        className="btn-delete"
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        -
      </button>
    </>
  );
};

export default Notes;
