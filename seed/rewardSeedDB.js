const mongoose = require("mongoose");
let Reward = require("../models/reward");

//Reward seed data
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Token-e-Economy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

let rewardSeed = [
  {
    description: {
      type: "5 minutes of screen time",
    },
    token_value: {
      type: 1,
    },
  },
  {
    description: {
      type: "Dessert after dinner",
    },
    token_value: {
      type: 5,
    },
  },
  {
    description: {
      type: "Go to pet store to see puppies",
    },
    token_value: {
      type: 50,
    },
  },
  {
    description: {
      type: "Family bowling/mini-golf night",
    },
    token_value: {
      type: 75,
    },
  },
  {
    description: {
      type: "Inexpensive toy",
    },
    token_value: {
      type: 100,
    },
  },
];

Reward.deleteMany({})
  .then(() => Reward.collection.insertMany(rewardSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
