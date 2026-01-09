import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// OTIMIZAÇÃO: Define que esta página deve ser gerada estaticamente (Static Site Generation).
// Como o Sanity Studio é uma "Single Page Application" (roda 100% no navegador do cliente),
// não precisamos que o servidor processe nada. Isso torna o carregamento da rota /studio muito rápido.
export const dynamic = "force-static";

// Exporta metadados prontos (título da aba, configurações de zoom/mobile)
// específicos para garantir que o Studio funcione bem em qualquer dispositivo.
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  // Renderiza o componente visual do CMS usando as configurações
  // que definimos no arquivo 'sanity.config.ts' (schemas, plugins, ID do projeto).
  return <NextStudio config={config} />;
}
