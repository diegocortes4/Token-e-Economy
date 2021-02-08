const mongoose = require("mongoose");
let Task = require("../models/task");

//Seed data for Task
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Token-e-Economy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

let taskSeed = [
  {
    day: {
      type: "Monday"
    },
    target_behavior: {
      type: "Get out of bed with no more than one reminder",
    },
    token_value: {
      type: 1,
    },
    clinician_notes: {
      type: "Parent checks after first reminder",
    },
  },
  {
    target_behavior: {
      type: "Come downstairs dressed before timer ends",
    },
    token_value: {
      type: 5,
    },
    clinician_notes: {
      type: "Upon coming down stairs",
    },
  },
  {
    target_behavior: {
      type: "Put away shoes and backpack after school",
    },
    token_value: {
      type: 10,
    },
    clinician_notes: {
      type: "Upon entering house",
    },
  },
  {
    target_behavior: {
      type: "Follow all Behavior Rules all day",
    },
    token_value: {
      type: 25,
    },
    clinician_notes: {
      type: "When child presents ready for bed",
    },
  },
];

Task.deleteMany({})
  .then(() => Task.collection.insertMany(taskSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
