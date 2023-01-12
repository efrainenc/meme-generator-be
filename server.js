///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;
const cors= require('cors');
const morgan = require('morgan');

// import express
const express = require("express");
require('./config/db.connection')

const { peopleControllers } = require ('./controllers')

// create application object
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/people', peopleControllers);
app.use((err, req, res, next) => res.status(500).send(err))
	
///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
