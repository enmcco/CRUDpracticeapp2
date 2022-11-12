// require express
const express = require('express');

// require path so that we can serve static file with __dirname
const path = require('path');

// initialize express
const app = express();

// deal with cors error
const cors = require('cors');
app.use(cors());

// telling server.js to connect to the route.js file
const crudAPI = require('./route.js');

// whenever we get a request from the frontend, this will turn it into a JSON object
app.use(express.json());

// recognize incoming request objects as strings or arrays
app.use(express.urlencoded({ extended: true }));

// when we go to /api endpoint, use the crudAPI router
app.use('/api', crudAPI);

//Serve static file
app.use('/', express.static(path.join(__dirname, '/index.html')));

// Catch all
app.use('*', (req, res) => {
  return res.status(404).send('Page not found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log + ': ' + err);
  return res.status(errObj.status).json(errObj.message);
});

const PORT = 3000;

//Listening on PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});

// EXPORT
module.exports = app;