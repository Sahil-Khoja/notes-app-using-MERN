import React from "react";
import API from "../services/api";

const NoteItem = ({ note, refresh }) => {
  const deleteNote = async () => {
    await API.delete(`/${note._id}`);
    refresh();
  };

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
};

export default NoteItem;