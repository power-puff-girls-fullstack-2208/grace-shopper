const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const volleyball = require('volleyball');
const PORT = process.env.PORT || 1337;
const db = require('./db');
const bcrypt = require('bcrypt');
const User = require('./db/User');
const cookieParser = require('cookie-parser');
const { validateToken } = require('./api/JWT');

// app.use(cors);
// app.use(volleyball);
// commented some of these lines out because localhost did not like some of them
// but as we develop more we'll end up uncommenting and they'll be relevant
// -- Eve

// static middleware
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static('development-wireframes'))
//this is where some things should go
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//testing
//app.use("/products", require("./api/products"));

app.use('/static', express.static(path.join(__dirname, '../public')));

app.get("/profile", validateToken, (req, res) => {
  res.json('PROFILE!')
})

app.use("/api", require("./api"));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

app.listen(PORT, ()=> console.log(`listening on port ${PORT}\ngo --> http://localhost:${PORT}/`));
module.exports = app;