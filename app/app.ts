const express = require('express');
const cors = require('cors')
const logger = require('morgan')

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger))
app.use(cors())
app.use(express.json())

app.get((req, res) => {
    res.status(201).json({ message: "OK" });
});

app.use((req, res) => {
    res.status(401).json({message: 'Not found'});
});

// TODO: Add costume error handler

module.exports = app