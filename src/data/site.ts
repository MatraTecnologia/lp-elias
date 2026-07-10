/* ------------------------------------------------------------------
   Dados do site. Campos marcados com TODO precisam dos valores reais
   do Elias antes de publicar.
   ------------------------------------------------------------------ */

export const site = {
  name: "Elias Gomes",
  role: "Arquiteto e Urbanista",
  // TODO: registro profissional real
  cau: "CAU A00000-0",
  // TODO: cidade / região de atuação real
  location: "Ribeirão Preto — SP",
  // TODO: número real com DDI/DDD, só dígitos
  whatsapp: "5543999140409",
  // TODO: handle real do Instagram
  instagram: "eliasgomes.arq",
  email: "contato@eliasgomes.arq", // TODO
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const instagramLink = `https://instagram.com/${site.instagram}`;

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const problems = [
  {
    title: "Obras sem planejamento",
    body: "Começar a construir sem um plano executivo é o caminho mais curto para retrabalho e custo fora de controle.",
  },
  {
    title: "Atrasos que não acabam",
    body: "Sem cronograma acompanhado de perto, cada etapa empurra a próxima e a entrega vira uma data que nunca chega.",
  },
  {
    title: "Desperdício de material",
    body: "Compra errada, sobra e improviso corroem o orçamento em silêncio — dinheiro que some sem virar parede.",
  },
  {
    title: "Execução fora do projeto",
    body: "O que foi desenhado nem sempre é o que se constrói. Sem controle técnico, o resultado se distancia do combinado.",
  },
];

export const services = [
  {
    code: "01",
    title: "Projeto arquitetônico",
    body: "Residencial e comercial. Do estudo preliminar ao executivo, com desenho pensado para ser construído — não só para ser bonito.",
  },
  {
    code: "02",
    title: "Acompanhamento de obras",
    body: "Presença técnica em cada fase da construção, garantindo que a execução siga o projeto, o prazo e o orçamento.",
  },
  {
    code: "03",
    title: "Gerenciamento e execução",
    body: "Coordenação de equipes, fornecedores e cronograma. A obra conduzida com método, do primeiro traço à entrega das chaves.",
  },
  {
    code: "04",
    title: "Vistorias técnicas",
    body: "Avaliação do estado da construção, laudos e diagnósticos para decidir com base técnica, não em achismo.",
  },
  {
    code: "05",
    title: "Regularização de imóveis",
    body: "Documentação, adequação às normas e regularização junto aos órgãos competentes para deixar o imóvel em dia.",
  },
  {
    code: "06",
    title: "Consultoria para construção",
    body: "Orientação técnica para quem vai construir ou reformar e quer tomar as decisões certas antes de gastar.",
  },
];

export const method = [
  {
    step: "01",
    title: "Planejamento",
    body: "Definição do escopo, projeto executivo, orçamento e cronograma. A obra começa no papel, com tudo previsto.",
  },
  {
    step: "02",
    title: "Preparação",
    body: "Fornecedores, equipe e materiais alinhados. Cada compra e contratação parte do plano, não da urgência.",
  },
  {
    step: "03",
    title: "Execução acompanhada",
    body: "Visitas técnicas, controle de qualidade e decisões em obra. O projeto vira realidade sob supervisão constante.",
  },
  {
    step: "04",
    title: "Entrega",
    body: "Verificação final, ajustes e entrega. Uma obra concluída dentro do que foi planejado, sem surpresas.",
  },
];

/* Números de prova. TODO: substituir pelos dados reais do Elias. */
export const stats = [
  { value: "+12", label: "anos de experiência" },
  { value: "+80", label: "obras acompanhadas" },
  { value: "100%", label: "execução conforme projeto" },
];
