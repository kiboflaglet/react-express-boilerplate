// import { UserSchema, UserType } from "@/models/user.model";
// import { auth } from "@/utils/auth";
// import { prisma } from "@/utils/prisma";
// import { serviceResponse } from "@/utils/serviceResponse";
// import { fromNodeHeaders } from "better-auth/node";
// import express, { Request, Response, type Router } from "express";
// import { StatusCodes } from "http-status-codes";

// export const userRoute: Router = express.Router();

// userRoute.get("/me", async (req: Request, res: Response) => {
//   try {
//     const session = await auth.api.getSession({
//       headers: fromNodeHeaders(req.headers),
//     });

//     if (!session?.user) {
//       const result = serviceResponse.failure(
//         "Login failed",
//         null,
//         "Session login failed",
//         StatusCodes.UNAUTHORIZED
//       );
//       return res.status(result.statusCode).send(result);
//     }

//     const user = UserSchema.parse(session.user);

//     const response: UserType = { ...user };

//     const result = serviceResponse.success("Login successfull", response);
//     return res.status(result.statusCode).send(result);
//   } catch (error) {
//     const result = serviceResponse.failure(
//       "Internal error",
//       null,
//       String(error),
//       StatusCodes.INTERNAL_SERVER_ERROR
//     );
//     return res.status(result.statusCode).send(result);
//   }
// });
