// DEPENDENCIES
require('dotenv').config();
const express = require('express');

// CONFIGURATION
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
    res.send(`Welcome to an Awesome App about Breads!  Breads index page is at <a href="http://localhost:${PORT}/breads">Link</a>`);
});

// CONTROLLERS
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

// 404 Page
app.get('*', (req, res) => {
    res.send('404');
});

// LISTEN
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}:  http://localhost:${PORT}`);
});
