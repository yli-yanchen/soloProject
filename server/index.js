const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require("cors");
const homeRoutes = require("./routes/home.js");

const app = express();

app.use(bodyParser.json( {limit: "30mb", extended: true } ));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true } ));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://yliyanchen:Liyi19961013@cluster0.1oawmot.mongodb.net/?retryWrites=true&w=majority";
const PORT  = 3000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false)

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// app.use("/about", homeRoutes);
app.use("/home", homeRoutes);


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


module.exports = app;
