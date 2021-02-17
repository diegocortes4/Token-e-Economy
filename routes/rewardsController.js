const express = require("express");
const router = express.Router();
const db = require("../models");

//rewards api routes
router.get("/", (req, res) => {
  db.Reward.find({})
    .then((foundRewards) => {
      res.json(foundRewards);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", ({ body, params }, res) => {
  console.log(body);
  db.Reward.findById(params.id)
    .then((updateReward) => {
      res.json(updateReward);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  db.Reward.create(req.body)
    .then((newReward) => {
      res.json(newReward);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", ({ body, params }, res) => {
  console.log(body);
  db.Reward.findByIdAndUpdate(
    params.id,
    { description: body.description, token_value: body.token_value },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then((updateReward) => {
      res.json(updateReward);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Used to subtract the reward value to the total tokens for the user
router.put("/:id/redeem/user/:userId", (req, res) => {
  db.User.findById(req.params.userId)
    .then((foundUser) => {
      console.log("FOUND USER");
      console.log(foundUser);
      // TODO: Change the task to complete in the req.body, or hard code it here.
      db.Reward.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
        (updateReward) => {
          console.log("UPDATED REWARD");
          console.log(updateReward);
          foundUser.token_total =
            foundUser.token_total - updateReward.token_value;
          console.log("USER TO UPDATE");
          console.log(foundUser);
          db.User.findByIdAndUpdate(req.params.userId, foundUser, {
            new: true,
          }).then((updatedUser) => {
            console.log("UPDATED USER");
            console.log(updatedUser);
            res.json(updatedUser);
          });
        }
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.delete("/:id", (req, res) => {
  db.Reward.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
