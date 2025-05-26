import { io, httpServer } from "./server_initialization/index.js";

const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("a user connected");
});

httpServer.listen(PORT, () => {
  console.log(`Ws-server is running on port ${PORT}`);
});
