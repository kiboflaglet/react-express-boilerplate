// import { serviceResponse } from "@/utils/serviceResponse";
// import { ExampleType } from "./example.model";
// import { ExampleRepo } from "./example.repo";
// import { StatusCodes } from "http-status-codes";

// export class ExampleService {
//   private exampleRepo: ExampleRepo;

//   constructor(exampleRepo: ExampleRepo = new ExampleRepo()) {
//     this.exampleRepo = exampleRepo;
//   }

  //   async getExample(
  //     data: ExampleType
  //   ): Promise<serviceResponse<ExampleType | null>> {
  //     try {
  //       const result = await this.exampleRepo.getExample(data);

  //       if (!result) {
  //         return serviceResponse.failure("Not found", null, "Dev message");
  //       }

  //       return serviceResponse.success("Result", result);
  //     } catch (error) {
  //       return serviceResponse.failure(
  //         "Internal error",
  //         null,
  //         String(error),
  //         StatusCodes.INTERNAL_SERVER_ERROR
  //       );
  //     }
  //   }

  //   async postExample(
  //     data: ExampleType
  //   ): Promise<serviceResponse<ExampleType | null>> {
  //     try {
  //       const newRequest = await this.exampleRepo.postExample(data);
  //       return serviceResponse.success("Result", newRequest);
  //     } catch (error) {
  //       return serviceResponse.failure(
  //         "Internal error",
  //         null,
  //         String(error),
  //         StatusCodes.INTERNAL_SERVER_ERROR
  //       );
  //     }
  //   }
// }

// export const exampleService = new ExampleService()