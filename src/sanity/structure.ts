import type { StructureResolver } from "sanity/structure";

// Define como o menu lateral do Sanity Studio é organizado.
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list().title("Content").items(S.documentTypeListItems());
