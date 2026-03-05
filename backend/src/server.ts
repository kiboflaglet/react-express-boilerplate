import express, { type Express } from "express";
// import { auth } from "./utils/auth";
// import { toNodeHandler } from "better-auth/node";
// import { exampleRoute } from "./example/example.route";
// import { userRoute } from "./user/user.route";
import cors from "cors";
const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// const apiRouter = express.Router();
// apiRouter.all('/auth/{*any}', toNodeHandler(auth));
// apiRouter.use(authRoute);
// apiRouter.use(exampleRoute);
// app.use("/api", apiRouter)


export { app };
