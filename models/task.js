const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  day: {
    type: String,
    required: true,
  },

  target_behavior: {
    type: String,
    required: true,
  },
  token_value: {
    type: Number,
    required: true,
  },
  clinician_notes: {
    type: String,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
