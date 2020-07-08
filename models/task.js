const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    taskLocation: {
        type: String,
        required: true
    },
    taskDate: {
        type: Date,
        required: true
    },
});

const Task = model('task', taskSchema);

module.exports = Task;