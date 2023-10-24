require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
},
(req, res) => res.json({ time: req.time })
);

app.get("/:word/echo", (req, res) => {
    res.json({echo: req.params.word});
});

app.get("/name", (req, res) => {
    var fn = req.query.first;
    var ln = req.query.last;

    res.json({name: `${fn} ${ln}`});
});

app.post("/name", (req, res) => {
    var fn = req.body.first;
    var ln = req.body.last;
    
    res.json({name: `${fn} ${ln}`});
});

module.exports = app;