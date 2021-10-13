const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  id: {type: , required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userdata:{
    src: {type: img, required: true},
    username: {type: string, required: true}
  }
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
