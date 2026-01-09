import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    // 1. Nome do Projeto (ex: Casa Marrom)
    defineField({
      name: "title",
      title: "Título do Projeto",
      type: "string",
    }),

    // 2. Slug (para criar a url: meusite.com/projeto/casa-marrom)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    // 3. Foto Principal (Fachada) - Campo único
    defineField({
      name: "mainImage",
      title: "Foto de Capa (Fachada)",
      type: "image",
      options: {
        hotspot: true, // Permite recortar o foco da imagem
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto Alternativo",
        },
      ],
    }),

    // 4. Galeria de Fotos Auxiliares - Array de imagens
    defineField({
      name: "gallery",
      title: "Galeria de Fotos (Internas, Plantas, etc)",
      type: "array", // Aqui está o segredo: uma lista
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Legenda (ex: Banheiro, Área Externa)",
            },
          ],
        },
      ],
      options: {
        layout: "grid", // Fica visualmente bonito no painel do Sanity
      },
    }),
  ],
});
