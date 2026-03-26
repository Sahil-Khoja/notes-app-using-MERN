import React, { useEffect, useState } from "react";
import API from "../services/api";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await API.get("/");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      {notes.length === 0 ? (
        <p>No Notes Available</p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note._id} note={note} refresh={fetchNotes} />
        ))
      )}
    </div>
  );
};

export default NoteList;