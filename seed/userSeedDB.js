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
    role: {
      type: "clinician",
    },
    email: {
      type: "clinician@email.com",
    },
    password: {
      type: "Password1!",
    },
    token_total: {
      type: "100",
    },
    token_type: {
      type: "Sticker",
    },
    lastLogin: {
      type: "02/03/2021",
    },
  },
  {
    role: {
      type: "parent",
    },
    email: {
      type: "parent@email.com",
    },
    password: {
      type: "Password1!",
    },
    token_total: {
      type: "100",
    },
    token_type: {
      type: "Sticker",
    },
    lastLogin: {
      type: "02/03/2021",
    },
  },
  {
    role: {
      type: "parent",
    },
    email: {
      type: "parent2@email.com",
    },
    password: {
      type: "Password1!",
    },
    token_total: {
      type: "50",
    },
    token_type: {
      type: "Star",
    },
    lastLogin: {
      type: "02/07/2021",
    },
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
