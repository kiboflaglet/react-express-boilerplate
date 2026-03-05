// import { ExampleType } from "@/example/example.model";
// import { logError } from "@/utils/logError";
// import type { Server as HttpServer } from "http";
// import { Server } from "socket.io";

// export const SOCKET_EVENTS = {
//   CONNECTION: "connection",
//   EXAMPLE: "example",
// };

// export const initSocket = (httpServer: HttpServer) => {
//   const io = new Server(httpServer, {
//     cors: {
//       origin: "http://localhost:5173",
//     },
//   });

//   setIO(io);

//   return io;
// };

// export const emitExampleData = (io: Server | null, data: ExampleType) => {
//   if (io) {
//     io.emit(SOCKET_EVENTS.EXAMPLE, data);
//   }
// };

// let io: Server | null = null;

// export const setIO = (instance: Server) => {
//   if (io) return;
//   io = instance;
// };

// export const getIO = () => {
//   if (!io) {
//     logError("WebSocket is not initialized");
//   }

//   return io;
// };
