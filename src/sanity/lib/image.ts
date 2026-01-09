import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// Configura o construtor de URLs de imagens
// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

// Helper para converter referências de imagem do Sanity em URLs reais.
// Permite encadear métodos como .width(), .height(), .fit(), etc.
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
