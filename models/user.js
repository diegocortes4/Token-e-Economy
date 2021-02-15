const mongoose = require("mongoose");
const { schema } = require("./reward");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter your name",
  },
  role: {
    type: String,
    enum: ["Clinician", "Parent"],
    // required: true,
  },
  email: {
    type: String,
    trim: true,
    required: "Enter your email address which will be used for login",
    index: { unique: true },
  },
  password: {
    type: String,
    trim: true,
    required: "Enter your password",
  },
  // tasks_complete: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Task",
  //   },
  // ],
  // tasks_current: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Task",
  //   },
  // ],
  // token_total: {
  //   type: Number,
  // },
  token_data: [
    {
      type: Date,
      type: Number,
    },
  ],
  token_type: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
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
