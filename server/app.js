const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const volleyball = require('volleyball');
<<<<<<< HEAD
const { User } = require('./db');
const PORT = process.env.PORT || 3000;
=======
const PORT = process.env.PORT || 1337;
>>>>>>> 5ec4932e223ea0b0945221b5685d9915dbbebbf7

// commented some of these lines out because localhost did not like some of them
// but as we develop more we'll end up uncommenting and they'll be relevant
// -- Eve

// static middleware
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static('development-wireframes'))
// app.use(volleyball);
// app.use(cors);
//this is where some things should go
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/api", require("./api"));

app.get("/test/", (req, res) => {
  res.send('this is a drill');
})

app.use('/static', express.static(path.join(__dirname, '../public')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});
<<<<<<< HEAD

app.post('/api/auth', async(req, res, next) => {
  try{
    res.send(await User.authenticate(req.body))
  }
  catch (ex) {
    next(ex)
  }
})

app.get('api/auth', async(req,res,next) => {
  try{
    res.send(await User.findByToken(req.headers.authorization))
  }
  catch (ex) {
    next(ex)
  }
})

app.listen(PORT, ()=> console.log(`listening on port ${PORT}\ngo --> http://localhost:3000/`));
=======
app.listen(PORT, ()=> console.log(`listening on port ${PORT}\ngo --> http://localhost:${PORT}/`));
>>>>>>> 5ec4932e223ea0b0945221b5685d9915dbbebbf7
module.exports = app;