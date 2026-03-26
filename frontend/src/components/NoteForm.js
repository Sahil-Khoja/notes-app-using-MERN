import React, { useState } from "react";
import API from "../services/api";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    await API.post("/", { title, content });

    setTitle("");
    setContent("");

    window.location.reload();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;