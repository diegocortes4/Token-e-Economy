const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks_completed: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task"
    }
  ],
  token_total: {
    type: Number,
  },
  token_type: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
  },
  createdAt: {
    type: Number,

  },
  updatedAt: {
    type: Number,

  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
