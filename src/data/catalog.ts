/**
 * Catálogo Oficial de Serviços e Dados do Studio Borges
 * Amanda Borges - Especialista em Cílios e Sobrancelhas
 */

export interface ServicoCilios {
  id: string;
  nome: string;
  slogan: string;
  descricao: string;
  preco: number;
  imagem: string;
  destaque?: string;
}

export interface ServicoSobrancelha {
  id: string;
  nome: string;
  slogan: string;
  descricao: string;
  preco: number;
  imagem: string;
  observacao?: string;
}

export interface FaixaManutencao {
  tecnica: string;
  ate15Dias: number;
  de16a20Dias: number;
  de21a25Dias: number;
}

export const DADOS_STUDIO = {
  nome: "Studio Borges",
  fundadora: "Amanda Borges",
  instagram: "@lashamandaborges",
  urlInstagram: "https://www.instagram.com/lashamandaborges/",
  telefone: "(11) 96839-9735",
  telefoneLimpo: "5511968399735",
  endereco: "Rua Ulisses Soares, 12 - Pestana, Osasco - SP",
  urlMapaBusca: "https://share.google/3aKE1UjJS2xZ65QmF",
  horarioFuncionamento: "Terça a Sábado, das 09h às 19h (com horário marcado)",
  avisoDesconto: "5% OFF no Pix ou dinheiro",
};

/**
 * Gera o link direto para o WhatsApp com mensagem pronta
 */
export function obterLinkWhatsApp(nomeServico?: string): string {
  const linkBase = `https://wa.me/${DADOS_STUDIO.telefoneLimpo}`;
  if (!nomeServico) {
    const mensagemPadrao = encodeURIComponent(
      "Olá Amanda! Vim pelo site do Studio Borges e gostaria de consultar os horários disponíveis."
    );
    return `${linkBase}?text=${mensagemPadrao}`;
  }
  const mensagemPersonalizada = encodeURIComponent(
    `Olá Amanda! Gostaria de agendar o procedimento: *${nomeServico}*. Quais horários estão disponíveis?`
  );
  return `${linkBase}?text=${mensagemPersonalizada}`;
}

// 6 técnicas de extensão de cílios (imagens WebP otimizadas)
export const SERVICOS_CILIOS: ServicoCilios[] = [
  {
    id: "volume-brasileiro",
    nome: "Volume Brasileiro",
    slogan: "Naturalidade & leveza",
    descricao: "Fios em Y com acabamento delicado e ótimo caimento para o dia a dia.",
    preco: 150,
    imagem: "/images/studio/volume-brasileiro.webp",
    destaque: "Mais Pedido",
  },
  {
    id: "volume-egipcio",
    nome: "Volume Egípcio",
    slogan: "Alinhamento marcante",
    descricao: "Fios em W ultraleves para um olhar bem preenchido e uniforme.",
    preco: 160,
    imagem: "/images/studio/volume-egipcio.webp",
  },
  {
    id: "volume-hibrido",
    nome: "Volume Híbrido",
    slogan: "Clássico + volume",
    descricao: "Mistura equilibrada entre fios clássicos e leques suaves.",
    preco: 170,
    imagem: "/images/studio/volume-hibrido.webp",
  },
  {
    id: "volume-russo",
    nome: "Volume Russo",
    slogan: "Densidade aveludada",
    descricao: "Leques feitos à mão para quem busca um olhar expressivo e cheio.",
    preco: 180,
    imagem: "/images/studio/volume-russo.webp",
    destaque: "VIP",
  },
  {
    id: "fox-eyes",
    nome: "Fox Eyes",
    slogan: "Efeito lifting alongado",
    descricao: "Alongamento gradual nos cantos externos que eleva e valoriza o olhar.",
    preco: 190,
    imagem: "/images/studio/fox-eyes.webp",
    destaque: "Tendência",
  },
  {
    id: "volume-power",
    nome: "Volume Power",
    slogan: "Máxima intensidade",
    descricao: "Super preenchimento ultra-black com impacto visual completo.",
    preco: 200,
    imagem: "/images/studio/volume-power.webp",
  },
];

// 3 procedimentos de sobrancelhas (imagens WebP otimizadas)
export const SERVICOS_SOBRANCELHAS: ServicoSobrancelha[] = [
  {
    id: "design-sobrancelhas",
    nome: "Design Personalizado",
    slogan: "Geometria facial",
    descricao: "Mapeamento facial milimétrico para valorizar a simetria natural do rosto.",
    preco: 45,
    imagem: "/images/studio/design-sobrancelhas.webp",
  },
  {
    id: "design-com-henna",
    nome: "Design com Henna",
    slogan: "Realce & preenchimento",
    descricao: "Design alinhado com aplicação de henna para cobrir falhas e definir o traço.",
    preco: 55,
    imagem: "/images/studio/design-henna-limpo.webp",
  },
  {
    id: "protocolo-recuperacao",
    nome: "Protocolo de Recuperação",
    slogan: "Nutrição dos fios",
    descricao: "Tratamento fortalecedor para estimular o crescimento e recuperar falhas.",
    preco: 95,
    imagem: "/images/studio/protocolo-recuperacao-limpo.webp",
    observacao: "Comparativo real: acima antes do tratamento • abaixo após recuperação.",
  },
];

// Tabela de manutenções por técnica e intervalo
export const DADOS_MANUTENCAO: FaixaManutencao[] = [
  { tecnica: "Brasileiro", ate15Dias: 90, de16a20Dias: 100, de21a25Dias: 120 },
  { tecnica: "Egípcio", ate15Dias: 100, de16a20Dias: 110, de21a25Dias: 120 },
  { tecnica: "Russo", ate15Dias: 110, de16a20Dias: 120, de21a25Dias: 130 },
  { tecnica: "Híbrido", ate15Dias: 120, de16a20Dias: 130, de21a25Dias: 140 },
  { tecnica: "Fox Eyes", ate15Dias: 120, de16a20Dias: 130, de21a25Dias: 140 },
  { tecnica: "Power", ate15Dias: 120, de16a20Dias: 135, de21a25Dias: 145 },
];

// Regras essenciais de atendimento resumidas
export const REGRAS_ATENDIMENTO = [
  {
    titulo: "Tolerância de 15 minutos",
    detalhe: "Atrasos maiores podem exigir reagendamento para não prejudicar a próxima cliente.",
  },
  {
    titulo: "Reserva com sinal & aviso de 24h",
    detalhe: "O sinal é abatido do valor final; alterações precisam de 24 horas de antecedência.",
  },
  {
    titulo: "Manutenção entre 15 e 25 dias",
    detalhe: "Necessário ter ao menos 40% dos fios. Após 30 dias, vale como nova aplicação.",
  },
  {
    titulo: "Garantia de 7 dias & Cuidados",
    detalhe: "Retoque gratuito em 7 dias. Compareça sem maquiagem nos olhos e evite vapor nas primeiras 24h.",
  },
];
