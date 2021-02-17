const express = require("express");
const router = express.Router();
const db = require('../models');

//task api routes
router.get("/", (req, res) => {
    db.Task.find({})
        .then((foundTasks) => {
            res.json(foundTasks);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/:id", ({ body, params }, res) => {
    console.log(body);
    db.Task.findById(params.id)
        .then((updateTask) => {
            res.json(updateTask);
        })
        .catch((err) => {
            res.json(err);
        });
});

// user id for tasks
router.get("/user/:id", ({ body, params }, res) => {
    console.log(body);
    db.Task.find({ user_id: params.id })
        .then((updateTask) => {
            res.json(updateTask);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post("/", (req, res) => {
    db.Task.create(req.body)
        .then((newTask) => {
            res.json(newTask);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put("/:id/complete/user/:userId", (req, res) => {
    db.User.findById(req.params.userId).then(foundUser => {
        console.log("FOUND USER");
        console.log(foundUser);
        // TODO: Change the task to complete in the req.body, or hard code it here.
        db.Task.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updatedTask => {
            console.log("UPDATED TASK");
            console.log(updatedTask);
            foundUser.token_total = foundUser.token_total + updatedTask.token_value;
            console.log("USER TO UPDATE");
            console.log(foundUser)
            db.User.findByIdAndUpdate(req.params.userId, foundUser, { new: true }).then(updatedUser => {
                console.log("UPDATED USER");
                console.log(updatedUser);
                res.json(updatedUser)
            })
        })
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})


router.put("/:id", ({ body, params }, res) => {
    console.log(body);
    db.Task.findByIdAndUpdate(
        params.id,
        {
            task_name: body.task_name,
            target_behavior: body.target_behavior,
            clinician_notes: body.clinician_notes,
            token_value: body.token_value,
        },
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



router.delete("/:id", (req, res) => {
    db.Task.findByIdAndDelete(req.params.id).then((result) => {
        res.json(result);
    });
});

module.exports = router;