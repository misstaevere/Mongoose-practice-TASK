const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskController');

require('./config/db_connection');

app.use(bodyParser.json());

app.use('/task', taskRoutes);

const server = app.listen(4494, function() {
    console.log(`Server successfully started on port ${server.address().port}`)
});