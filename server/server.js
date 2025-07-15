const express = require("express");
const path = require("path");
const http = require("http");
const { v4: uuidV4 } = require("uuid");
const { ExpressPeerServer } = require("peer");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// PeerJS setup
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/peerjs"
});
app.use("/peerjs", peerServer);

// Enable CORS (for dev only)
app.use(cors());

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (React build)
app.use(express.static(path.join(__dirname, "../client/dist")));

// Serve public directory (for GIFs, etc.)
app.use("/public", express.static(path.join(__dirname, "public")));

// Redirect to unique room from root
app.get("/", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

// API: get room URL (optional for frontend)
app.get("/home", (req, res) => {
  const roomId = uuidV4();
  res.json({ roomUrl: `/${roomId}` });
});

// EJS-rendered room (used by backend routes like /:room)
app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

// React fallback route (optional if using React routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Socket.IO handling
io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
    });
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
