const router = require("express").Router();
const db = require("../../models");

//health check route
router.get("/api/healthcheck", (req, res) => {
  res.json({
    success: true,
  });
});

// router.route("/api/user/:id")
//   .get(plantsController.findUserById);

//rewards api routes
router.get("/api/rewards", (req, res) => {
  db.Reward.find({})
    .then((foundRewards) => {
      res.json(foundRewards);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/rewards/:id", ({ body, params }, res) => {
  console.log(body);
  db.Reward.findById(params.id)
    .then((updateReward) => {
      res.json(updateReward);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/rewards", (req, res) => {
  db.Reward.create(req.body)
    .then((newReward) => {
      res.json(newReward);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/rewards/:id", ({ body, params }, res) => {
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

router.delete("/api/rewards/:id", (req, res) => {
  db.Reward.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});








//user api routes
router.get("/api/users", (req, res) => {
  db.User.find({})
    .then((foundUsers) => {
      res.json(foundUsers);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/users", (req, res) => {
  db.User.create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/users/:id", ({ body, params }, res) => {
  db.User.findByIdAndUpdate(
    params.id,
    { description: body },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then((updateUser) => {
      res.json(updateUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/api/users/:id", (req, res) => {
  db.User.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

router.post("/api/registration", (req, res) => {
  db.User.create(req.body)
    .then((newUser) => {
      console.log(newUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
