/* ------------------------------------------------------------------
   Portfólio de projetos. Rótulos descritivos — sem nomes de clientes.
   As imagens vivem em src/assets/projetos/<slug>/ e são resolvidas por
   import.meta.glob dentro de Projects.astro (a primeira é a capa).
   ------------------------------------------------------------------ */

export type ProjectCategory = "Residencial" | "Comercial";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  scope: string;
  location?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "campos-do-conde",
    title: "Residência Campos do Conde",
    category: "Residencial",
    scope: "Projeto completo + interiores",
    location: "Campos do Conde Veredas",
    images: ["01.png", "02.png", "03.png", "04.png", "05.jpeg", "06.png", "07.png"],
  },
  {
    slug: "ecovillas",
    title: "Residência Ecovillas",
    category: "Residencial",
    scope: "Volumetria",
    location: "Ecovillas",
    images: ["01.jpg"],
  },
  {
    slug: "residencia-contemporanea",
    title: "Residência Contemporânea",
    category: "Residencial",
    scope: "Fachada + interiores",
    images: ["01.png", "02.png", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
  },
  {
    slug: "villagio",
    title: "Residência Villágio",
    category: "Residencial",
    scope: "Volumetria",
    location: "Villágio",
    images: ["01.png", "02.png", "03.png"],
  },
  {
    slug: "clinica-mavi",
    title: "Clínica Mavi",
    category: "Comercial",
    scope: "Fachada + interiores",
    images: [
      "01.jpeg",
      "02.jpeg",
      "03.jpeg",
      "04.jpeg",
      "05.jpeg",
      "06.jpeg",
      "07.jpeg",
      "08.jpeg",
      "09.jpeg",
      "10.jpeg",
    ],
  },
  {
    slug: "templo",
    title: "Templo Religioso",
    category: "Comercial",
    scope: "Projeto + interiores",
    location: "Cambé",
    images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"],
  },
  {
    slug: "cozinha-gourmet",
    title: "Cozinha & Área Gourmet",
    category: "Residencial",
    scope: "Interiores",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
  },
  {
    slug: "barbearia",
    title: "Barbearia",
    category: "Comercial",
    scope: "Projeto comercial",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  },
  {
    slug: "cafeteria",
    title: "Cafeteria",
    category: "Comercial",
    scope: "Volumetria",
    images: ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"],
  },
  {
    slug: "estudo-fachada",
    title: "Estudo de Fachada",
    category: "Residencial",
    scope: "Duas opções de fachada",
    images: ["01.jpg", "02.jpg"],
  },
  {
    slug: "residencia-terrea",
    title: "Residência Térrea",
    category: "Residencial",
    scope: "Volumetria",
    images: ["01.png", "02.png", "03.png"],
  },
  {
    slug: "residencia-moderna",
    title: "Residência Moderna",
    category: "Residencial",
    scope: "Volumetria",
    images: ["01.png", "02.png"],
  },
  {
    slug: "sobrado-londrina",
    title: "Sobrado Londrina",
    category: "Residencial",
    scope: "Volumetria",
    location: "Londrina",
    images: ["01.png", "02.png"],
  },
  {
    slug: "rolandia",
    title: "Residência Rolândia",
    category: "Residencial",
    scope: "Volumetria",
    location: "Rolândia",
    images: ["01.jpg", "02.jpg", "03.jpg"],
  },
  {
    slug: "espaco-gourmet",
    title: "Espaço Gourmet",
    category: "Comercial",
    scope: "Interiores",
    images: ["01.png", "02.png", "03.png"],
  },
  {
    slug: "cambe",
    title: "Residência Cambé",
    category: "Residencial",
    scope: "Volumetria",
    location: "Cambé",
    images: ["01.jpg"],
  },
  {
    slug: "londrina",
    title: "Residência Londrina",
    category: "Residencial",
    scope: "Volumetria",
    location: "Londrina",
    images: ["01.jpeg"],
  },
  {
    slug: "residencia-sobrado",
    title: "Residência Sobrado",
    category: "Residencial",
    scope: "Volumetria",
    images: ["01.png"],
  },
  {
    slug: "residencia-compacta",
    title: "Residência Compacta",
    category: "Residencial",
    scope: "Volumetria",
    images: ["01.jpeg"],
  },
];
