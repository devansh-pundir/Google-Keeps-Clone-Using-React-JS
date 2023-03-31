import React, { useState } from "react";
import Notes from "./Notes";

const Input = () => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [note, setNote] = useState([]);
  const addNote = () => {
    setNote((prev) => {
      return [...prev, input];
    });
    setInput({
      title: "",
      content: "",
    });
    setToggle(false);
  };
  const delNote = (id) => {
    setNote((prev) => {
      return prev.filter((value, index) => {
        return index !== id;
      });
    });
  };
  const [toggle, setToggle] = useState(false);
  const toggleEvent = () => {
    setToggle(true);
  };
  return (
    <>
      <div className="wrapper">
        <form className="form-container" onSubmit={handleSubmit}>
          <h1 className="notes-logo">📝</h1>
          <input
            type="text"
            placeholder="Title.."
            autoComplete="off"
            className="input-title"
            value={input.title}
            name="title"
            onChange={inputEvent}
            onClick={toggleEvent}
          />
          {toggle && (
            <input
              type="text"
              placeholder="Write here.. "
              autoComplete="off"
              className="input-content"
              value={input.content}
              name="content"
              onChange={inputEvent}
            />
          )}
          <button type="submit" className="btn-submit" onClick={addNote}>
            +
          </button>
        </form>
        <div className="note-container">
          {note.map((value, index) => {
            return (
              <>
                <div className="note-box">
                  <Notes
                    title={value.title}
                    content={value.content}
                    key={index}
                    id={index}
                    onClick={delNote}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Input;
