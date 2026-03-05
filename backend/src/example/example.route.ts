// import express, { Request, Response, type Router } from "express";
// import { ExampleSchema } from "./example.model";
// import { StatusCodes } from "http-status-codes";
// import { serviceResponse } from "@/utils/serviceResponse";
// import { exampleService } from "./example.service";

// export const exampleRoute: Router = express.Router();

// exampleRoute.get("/", async (req: Request, res: Response) => {
//   try {
//     const validatedRequest = ExampleSchema.safeParse(req.params);

//     if (!validatedRequest.success) {
//       return res
//         .status(StatusCodes.BAD_REQUEST)
//         .send(
//           serviceResponse.failure(
//             "Request failed",
//             null,
//             validatedRequest.error.message
//           )
//         );
//     }

//     const response = await exampleService.getExample(validatedRequest.data);

//     res.status(res.statusCode).send(response);
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

// exampleRoute.post("/", async (req: Request, res: Response) => {
//   try {
//     const validatedRequest = ExampleSchema.safeParse(req.body);

//     if (!validatedRequest.success) {
//       const result = serviceResponse.failure(
//         "Request failed",
//         null,
//         validatedRequest.error.message
//       );
//       return res.status(result.statusCode).send(result);
//     }

//     const response = await exampleService.postExample(validatedRequest.data);

//     res.status(response.statusCode).send(response);
//   } catch (error) {
//         const result = serviceResponse.failure(
//           "Internal error",
//           null,
//           String(error),
//           StatusCodes.INTERNAL_SERVER_ERROR
//         );
//         return res.status(result.statusCode).send(result);
//   }
// });
