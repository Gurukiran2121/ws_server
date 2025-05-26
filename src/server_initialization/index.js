import express from "express";
const app = express();
import http from "http";
const httpServer = http.createServer(app);
import { Server } from "socket.io";

const io = new Server(httpServer);

export { httpServer, io };
