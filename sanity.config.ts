"use client";
// Arquivo coração do Sanity Studio, principais configurações são feitas aqui

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { structure } from "./src/sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio", // Define o caminho base para acessar o Sanity Studio
  projectId, // ID do projeto Sanity
  dataset, // Dataset utilizado
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ], //
});
