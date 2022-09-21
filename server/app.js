const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const volleyball = require('volleyball');
const PORT = process.env.PORT || 3000;

// commented some of these lines out because localhost did not like some of them
// but as we develop more we'll end up uncommenting and they'll be relevant
// -- Eve

// static middleware
app.use(express.static(path.join(__dirname, '../public')))
// app.use(volleyball);
// app.use(cors);
//this is where some things should go
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/api", require("./api"));

app.get("/test/", (req, res) => {
  res.send('this is a drill');
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});
app.listen(PORT, ()=> console.log(`listening on port ${PORT}\ngo --> http://localhost:3000/`));
module.exports = app;