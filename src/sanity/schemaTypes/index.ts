import { type SchemaTypeDefinition } from "sanity";
import project from "./projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
};
