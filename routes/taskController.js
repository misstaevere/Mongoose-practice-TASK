const router = require('express').Router();
const Task = require('../models/task');

router.post('/create', (req, res) => {
    const body = req.body;
    const task = new Task(body);
    task.save(function (error, result) {
        if (error) return next(error);
        res.status(201).send(result);
    });
});

router.get('/getAll', (req, res, next) => {
    Task.find(function (error, tasks) {
        if (error) return next(error);
        res.send(tasks);
    });
});

router.get('/get', (req, res, next) => {
    Task.findById(req.query.id, function (error, tasks) {
        if (error) return next(error);
        res.send(tasks);
    });
});

router.put('/update/:id', (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, req.body, function (error, task) {
        if (error) return next(error);
        res.send(task);
    });
});

router.delete('/remove/:id', (req, res, next) => {
    Task.findByIdAndRemove(req.params.id, function (error, task) {
        if (error) return next(error);
        res.status(201).send(task);
    });
});

router.use(function (err, req, res, next) {
    res.status(418).send(err);
});

module.exports = router;