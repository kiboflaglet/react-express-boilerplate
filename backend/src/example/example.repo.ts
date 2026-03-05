// import { ExampleSchema, ExampleType } from "./example.model";

// export class ExampleRepo {

//   async getExample(
//     data: ExampleType
//   ): Promise<ExampleType> {
//     const result = await prisma.example.findUnique({
//       where: {
//         id: data.id,
//       },
//     });

//     return ExampleSchema.parse(result);
//   }

// }