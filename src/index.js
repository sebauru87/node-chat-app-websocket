require("dotenv").config();
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

const message = "Welcome!";

io.on("connection", (socket) => {
  console.log("new connection");

  socket.emit("welcomeMessage", message);
  socket.on("newMessage", (msg) => {
    io.emit("newMessage", msg);
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
