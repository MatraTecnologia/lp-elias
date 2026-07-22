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
    title: "Residência C|C",
    category: "Residencial",
    scope: "Projeto completo + interiores",
    location: "Campos do Conde Veredas",
    images: ["01.png", "02.png", "03.png", "04.png", "05.jpeg", "06.png", "07.png"],
  },
  {
    slug: "ecovillas",
    title: "Residencial no ecovilas do lago (residência K|M)",
    category: "Residencial",
    scope: "Volumetria",
    location: "Ecovillas",
    images: ["01.jpg"],
  },
  {
    slug: "residencia-contemporanea",
    title: "Residência M|E",
    category: "Residencial",
    scope: "Fachada + interiores",
    images: ["01.png", "02.png", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
  },
  {
    slug: "villagio",
    title: "Residencial no Vilagio do Engenho L|C",
    category: "Residencial",
    scope: "Volumetria",
    location: "Villágio",
    images: ["01.png", "02.png", "03.png"],
  },
  {
    slug: "clinica-mavi",
    title: "Clínica Estética Amavi",
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
    title: "Templo religioso A|D",
    category: "Comercial",
    scope: "Projeto + interiores",
    location: "Cambé",
    images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"],
  },
  {
    slug: "cozinha-gourmet",
    title: "Cozinha + Área Gourmet  Residência G|A",
    category: "Residencial",
    scope: "Interiores",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
  },
  {
    slug: "barbearia",
    title: "Residência T|H",
    category: "Comercial",
    scope: "Projeto comercial",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  },
  {
    slug: "cafeteria",
    title: "Residência P|C",
    category: "Comercial",
    scope: "Volumetria",
    images: ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"],
  },
  {
    slug: "residencia-ra",
    title: "Residência R|A",
    category: "Residencial",
    scope: "Duas opções de fachada",
    images: ["01.jpg", "02.jpg"],
  },
  {
    slug: "residencia-tj",
    title: "Residência T|J",
    category: "Residencial",
    scope: "Volumetria",
    images: ["01.png", "02.png", "03.png"],
  },
  {
    slug: "residencia-pk",
    title: "Residência P|K",
    category: "Residencial",
    scope: "Volumetria",
    location: "Rolândia",
    images: ["01.jpg", "02.jpg", "03.jpg"],
  },
  {
    slug: "residencia-re",
    title: "Residência R|E",
    category: "Residencial",
    scope: "Volumetria",
    location: "Cambé",
    images: ["01.jpg"],
  },
  {
    slug: "residencia-lo",
    title: "Residência L|O",
    category: "Residencial",
    scope: "Volumetria",
    location: "Londrina",
    images: ["01.jpeg"],
  },
  {
    slug: "residencia-compacta",
    title: "Residência Compacta",
    category: "Residencial",
    scope: "Volumetria",
    images: ["01.jpeg"],
  },
];
