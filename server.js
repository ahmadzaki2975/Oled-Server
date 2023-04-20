const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {cors: {origin: "*"}});
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/", (req,res) => {
  res.send("<h1>OLED SERVER BECAUSE WHY NOT</h1>");
})

app.post("/data", (req,res) => {
  const data = req.body;
  console.log("data received: ", data);
  res.statusCode = 200;
  res.send("Success")
  io.emit("data", data);
})

app.post("/alarm", (req, res) => {
  const data = req.body;
  console.log("alarm received: ", data);
  res.statusCode = 200;
  res.send("Success")
  io.emit("alarm", data); 
})

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
