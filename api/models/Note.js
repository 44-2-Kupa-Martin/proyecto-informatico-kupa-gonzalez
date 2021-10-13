const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  id: {type: Int, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

});

const UserSchema = new mongoose.Schema({
  avatar: {type: Img, required: true},
  username:{type: String, unique: true, required: true},
  logindate: Date
});

const User = moongoose.model('User'),UserSchema;
const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
