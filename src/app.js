const express = require('express');

const app = express();

app.use(express.json());

app.get("/Hello", (req, res) => {
    res.json({result : "Hello World!"});
});

module.exports = app;