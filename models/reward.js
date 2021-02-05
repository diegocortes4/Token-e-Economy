const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rewardSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  token_value: {
    type: Number,
    required: true,
  },
});

const Reward = mongoose.model("Reward", rewardSchema);

module.exports = Reward;
