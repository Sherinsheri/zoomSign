const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;
const { v4: uuidV4 } = require("uuid");
const cors = require("cors");
app.use(cors());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  //It redirects the client (browser) to a different URL.
  res.redirect(`/${uuidV4()}`);
});
app.get("/home", (req, res) => {
  const roomId = uuidV4();
  //It redirects the client (browser) to a different URL.
  res.json({ roomUrl: `/${roomId}` });
 // res.redirect(`/${uuidV4()}`);
});
app.get("/:room", (req, res) => {
  //Render a dynamic HTML page using a template engine (like EJS, Pug, Handlebars, etc.)
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
    });
  });
});

server.listen(port, '0.0.0.0')
