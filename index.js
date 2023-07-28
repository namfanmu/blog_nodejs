// load express from node module
const express = require("express");
const app = express();
const port = 3000;

// route
app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
