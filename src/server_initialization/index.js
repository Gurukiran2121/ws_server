import express from "express";
const app = express();
import http from "http";
const httpServer = http.createServer(app);
import { Server } from "socket.io";
import cors from "cors";

app.use(
  cors({
    origin: ["http://localhost:4010", "https://chatsyn.netlify.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:4010", "https://chatsyn.netlify.app"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export { httpServer, io, app };
