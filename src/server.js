const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(4000);
// WARNING: app.listen(80) will NOT work here!

io.on("connection", (socket) => {
  console.log("Socket Connected: " + socket.id);
});
