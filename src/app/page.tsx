import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

// 1. Atualizamos a Interface para bater com o Schema de Projetos
interface Project {
  _id: string;
  title: string;
  // A imagem principal
  mainImage: any;
  // A galeria é um array de imagens
  gallery?: {
    asset: any;
    caption?: string; // Legenda que criamos
    category?: string; // Categoria (Banheiro, etc)
  }[];
}

async function getProjects() {
  // 2. Query GROQ atualizada para buscar PROJETOS
  // Trazemos o título, imagem principal e a galeria completa
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    mainImage,
    gallery
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-center gap-10 items-center">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 ">
          Meus Projetos
        </h1>
        <Link
          href={"/studio"}
          className="text-gray-800 font-medium border-2 border-gray-800 py-2 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 mb-10"
        >
          Studio
        </Link>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            {/* Título do Projeto */}
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h2>
            </div>

            {/* --- FOTO GRANDE (PRINCIPAL/FACHADA) --- */}
            {project.mainImage && (
              <div className="relative w-full h-[400px]">
                <Image
                  src={urlFor(project.mainImage).width(1200).height(800).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority // Carrega a foto principal mais rápido
                />
              </div>
            )}

            {/* --- GALERIA (FOTOS MENORES EM BAIXO) --- */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="p-6 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                  Detalhes do Projeto
                </h3>

                {/* Grid para as fotos menores: 3 colunas no celular, 4 no PC */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {project.gallery.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 group">
                      <div className="relative aspect-square w-full overflow-hidden rounded-lg cursor-pointer">
                        <Image
                          src={urlFor(item).width(400).height(400).url()}
                          alt={item.caption || "Foto da galeria"}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      {/* Legenda pequena embaixo da foto mini (opcional) */}
                      {item.caption && (
                        <span className="text-[10px] text-gray-500 truncate">
                          {item.caption}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {projects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-lg">
              Nenhum projeto cadastrado ainda.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Acesse /studio para adicionar seu primeiro projeto.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
