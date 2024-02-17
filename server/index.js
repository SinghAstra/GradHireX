const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { Server } = require("socket.io");
const { createServer } = require("http");

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to the Database Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.get("/", (req, res) => {
  res.send("Chat Server is Running.");
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("chat message", (msg) => {
    socket.emit("chat message", msg);
  });
});
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
