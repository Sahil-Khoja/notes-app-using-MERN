const Note = require("../models/Note");

// CREATE
exports.createNote = async (req, res) => {
  try {
    const note = new Note(req.body);
    const saved = await note.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};