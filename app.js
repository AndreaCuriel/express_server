//Usando objeto express
const express = require("express");
const res = require("express/lib/response");
//app de Express
const app = express();
//Puerto en que camos a ver nuestra app: localhost:3000
const port = 3000;

//path inicial, respomderá a la url localhost: 3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Se inicilializa esta app
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
