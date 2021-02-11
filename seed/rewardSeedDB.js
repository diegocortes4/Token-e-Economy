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
    description: "5 minutes of screen time",
    token_value: 1,
  },
  {
    description: "Dessert after dinner",
    token_value: 5,
  },
  {
    description: "Go to pet store to see puppies",
    token_value: 50,
  },
  {
    description: "Family bowling/mini-golf night",
    token_value: 75,
  },
  {
    description: "Inexpensive toy",
    token_value: 100,
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
