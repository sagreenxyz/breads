// DEPENDENCIES
require('dotenv').config();
const express = require('express');

// CONFIGURATION
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!');
});

// CONTROLLERS
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

// LISTEN
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}:  http://localhost:${PORT}`);
});
