import { Airport, AirportSchema } from "./airport.schema";

export * from "./airport.dto";
export * from "./airport.schema";

export const SchemaDefinitions = [
  { name: Airport.name, schema: AirportSchema },
];
