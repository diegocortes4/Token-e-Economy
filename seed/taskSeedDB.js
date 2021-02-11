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
    day: "Monday",
    target_behavior: "Get out of bed with no more than one reminder",
    token_value: 1,
    task_name: "Get up",
    clinician_notes: "Parent checks after first reminder",
    chart: "Yes",
    createdAt: "2021-02-01",
  },
  {
    day: "Tuesday",
    target_behavior: "Come downstairs dressed before timer ends",
    token_value: 5,
    task_name: "Get dressed",
    clinician_notes: "Upon coming down stairs",
    chart: "Yes",
    createdAt: "2021-02-02",
  },
  {
    day: "Wednesday",
    target_behavior: "Put away shoes and backpack after school",
    token_value: 10,
    task_name: "After school",
    clinician_notes: "Upon entering house",
    chart: "Yes",
    createdAt: "2021-02-03",
  },
  {
    day: "Thursday",
    target_behavior: "Follow all Behavior Rules all day",
    token_value: 25,
    task_name: "End of day check",
    clinician_notes: "When child presents ready for bed",
    chart: "Yes",
    createdAt: "2021-02-04",
  },
  {
    day: "",
    target_behavior: "Follow all Behavior Rules all day",
    token_value: 25,
    task_name: "End of day check",
    clinician_notes: "When child presents ready for bed",
    chart: "No",
    createdAt: "2021-02-10",
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
