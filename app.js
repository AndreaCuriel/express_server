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

//Respondiendo text
//localhost:3000/launchx
app.get("/launchx", (req, res) => {
  res.send("Bienvenido a launchx");
});

//Regresar un objeto en un ruta
//localhost:3000/explorersInNode
app.get("/explorersInNode", (req, res) => {
  const explorer = { name: "Explorer", msg: "Hello" };
  res.send(explorer);
});

//query params: recibir parametros por la url
//htpp://localhost:3000/explorers/andrea
//req.params ={"explorerName":"andrea"}
app.get("/explorers/:explorerName", (req, res) => {
  res.send(req.params);
});

// Se inicilializa esta app
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
