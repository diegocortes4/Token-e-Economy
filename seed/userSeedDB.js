const mongoose = require("mongoose");
let User = require("../models/user");

//User seed data
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Token-e-Economy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

let userSeed = [
  {
    name: "Clinician Lastname",
    role: "Clinician",
    email: "clinician@email.com",
    password: "Password1!",
    token_total: "100",
    token_type: "Sticker",
    lastLogin: "02/03/2021",
  },
  {
    name: "Parent Lastname1",
    role: "Parent",
    email: "parent@email.com",
    password: "Password1!",
    token_total: "100",
    token_type: "Sticker",
    lastLogin: "02/03/2021",
  },
  {
    name: "Parent Lastname2",
    role: "Parent",
    email: "parent2@email.com",
    password: "Password1!",
    token_total: "50",
    token_type: "Star",
    lastLogin: "02/07/2021",
  },
];

User.deleteMany({})
  .then(() => User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
