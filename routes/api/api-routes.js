const router = require("express").Router();
const db = require("../../models");

// router.get("/api/workouts", (req, res) => {
//     db.Workout.find()
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

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
    db.Reward.find({}).then((foundRewards) => {
        res.json(foundRewards);
    })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/rewards", (req, res) => {
    db.Reward.create(req.body).then((newReward) => {
        res.json(newReward);
    })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/rewards/:id", ({ body, params }, res) => {
    db.Reward.findByIdAndUpdate(
        params.id,
        { description: body },
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

//task api routes
router.get("/api/tasks", (req, res) => {
    db.Task.find({}).then((foundTasks) => {
        res.json(foundTasks);
    })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/tasks", (req, res) => {
    db.Task.create(req.body).then((newTask) => {
        res.json(newTask);
    })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/tasks/:id", ({ body, params }, res) => {
    db.Task.findByIdAndUpdate(
        params.id,
        { description: body },
        // "runValidators" will ensure new exercises meet our schema requirements
        { new: true, runValidators: true }
    )
        .then((updateTask) => {
            res.json(updateTask);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.delete("/api/tasks/:id", (req, res) => {
    db.Task.findByIdAndDelete(req.params.id).then((result) => {
      res.json(result);
    });
  });

// router.get("/api/workouts/range", (req, res) => {
//     db.Workout.find({}).limit(7).sort({ date: -1 })
//         .then((dbWorkout) => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

module.exports = router;