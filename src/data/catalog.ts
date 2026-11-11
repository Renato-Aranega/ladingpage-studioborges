/**
 * Catálogo Oficial de Serviços e Dados do Studio Borges
 * Amanda Borges - Especialista em Cílios e Sobrancelhas
 */

// Estrutura de dados para os serviços de extensão de cílios
export interface ServicoCilios {
  id: string;
  nome: string;
  slogan: string;
  descricao: string;
  preco: number;
  imagem: string;
  destaque?: string;
  diferenciais: string[];
}

// Estrutura de dados para os serviços de design de sobrancelhas
export interface ServicoSobrancelha {
  id: string;
  nome: string;
  slogan: string;
  descricao: string;
  preco: number;
  imagem: string;
  beneficios: string[];
}

// Estrutura para os valores de manutenção periódica
export interface FaixaManutencao {
  tecnica: string;
  ate15Dias: number;
  de16a20Dias: number;
  de21a25Dias: number;
}

// Informações institucionais e de contato do estúdio
export const DADOS_STUDIO = {
  nome: "Studio Borges",
  fundadora: "Amanda Borges",
  instagram: "@lashamandaborges",
  urlInstagram: "https://www.instagram.com/lashamandaborges/",
  telefone: "(11) 96839-9735",
  telefoneLimpo: "5511968399735",
  endereco: "Rua Ulisses Soares, 12 - Pestana, Osasco - SP",
  urlMapaBusca: "https://maps.google.com/maps?q=" + encodeURIComponent("Rua Ulisses Soares, 12, Pestana, Osasco, SP"),
  horarioFuncionamento: "Terça a Sábado das 09h às 19h (Com agendamento prévio)",
  avisoDesconto: "5% de desconto para pagamentos via Pix ou espécie",
  slogan: "Onde beleza, cuidado e elegância se encontram.",
  subSlogan: "O brilho que você procura começa aqui.",
};

/**
 * Gera o link direto para o WhatsApp com mensagem personalizada para o procedimento
 */
export function obterLinkWhatsApp(nomeServico?: string): string {
  const linkBase = `https://wa.me/${DADOS_STUDIO.telefoneLimpo}`;
  if (!nomeServico) {
    const mensagemPadrao = encodeURIComponent(
      `Olá Amanda! Vim pelo site do Studio Borges e gostaria de tirar dúvidas e consultar os próximos horários disponíveis.`
    );
    return `${linkBase}?text=${mensagemPadrao}`;
  }
  const mensagemPersonalizada = encodeURIComponent(
    `Olá Amanda! Vim pelo site do Studio Borges e gostaria de agendar o procedimento: *${nomeServico}*. Quais são os próximos horários disponíveis?`
  );
  return `${linkBase}?text=${mensagemPersonalizada}`;
}

// Lista oficial dos 6 procedimentos de extensão de cílios
export const SERVICOS_CILIOS: ServicoCilios[] = [
  {
    id: "volume-brasileiro",
    nome: "Volume Brasileiro",
    slogan: "Naturalidade marcante e leveza",
    descricao: "Efeito preenchido e delicado, proporcionando volume, definição e naturalidade ao olhar com técnica fio a fio em formato de Y.",
    preco: 150,
    imagem: "/images/studio/volume-brasileiro.jpg",
    destaque: "Mais Pedido",
    diferenciais: ["Efeito delineado discreto", "Leveza extrema e retenção prolongada", "Ideal para o dia a dia elegante"],
  },
  {
    id: "volume-egipcio",
    nome: "Volume Egípcio",
    slogan: "Alinhamento e sofisticação",
    descricao: "Fios tecnológicos com efeito marcante e alinhado em formato W, garantindo um olhar preenchido com sofisticação geométrica.",
    preco: 160,
    imagem: "/images/studio/volume-egipcio.jpg",
    diferenciais: ["Preenchimento uniforme", "Fios ultraleves com base delicada", "Olhar elegante e expressivo"],
  },
  {
    id: "volume-hibrido",
    nome: "Volume Híbrido",
    slogan: "Equilíbrio entre clássico e volume",
    descricao: "A combinação perfeita entre fios clássicos e tufos de volume, equilibrando definição sutil e preenchimento glamouroso.",
    preco: 170,
    imagem: "/images/studio/volume-hibrido.jpg",
    diferenciais: ["Textura multidimensional", "Olhar texturizado exclusivo", "Personalizado ao formato dos olhos"],
  },
  {
    id: "volume-russo",
    nome: "Volume Russo",
    slogan: "Intensidade luxuosa e densidade",
    descricao: "Volume intenso e leques de fios delicadamente distribuídos à mão para um olhar expressivo, aveludado e sofisticado.",
    preco: 180,
    imagem: "/images/studio/volume-russo.png",
    destaque: "Queridinho VIP",
    diferenciais: ["Densidade máxima com toque de pluma", "Efeito leque personalizado (fans)", "Destaque deslumbrante"],
  },
  {
    id: "fox-eyes",
    nome: "Fox Eyes",
    slogan: "Efeito lifting alongado e sedutor",
    descricao: "Efeito alongado estrategicamente nos cantos externos, criando um olhar mais elevado, marcante, sedutor e com efeito lifting.",
    preco: 190,
    imagem: "/images/studio/fox-eyes.jpg",
    destaque: "Tendência",
    diferenciais: ["Efeito lifting nos cantos dos olhos", "Design sensual e moderno", "Sensação de amplitude no olhar"],
  },
  {
    id: "volume-power",
    nome: "Volume Power",
    slogan: "Impacto absoluto e mega preenchimento",
    descricao: "Máxima intensidade e super densidade para quem ama cílios pretos, densos, super volumosos e impactantes em qualquer ocasião.",
    preco: 200,
    imagem: "/images/studio/volume-power.jpg",
    diferenciais: ["Mega volume ultra-black", "Máximo destaque fotográfico", "Durabilidade e impacto visual total"],
  },
];

// Lista oficial dos procedimentos de harmonização e cuidado de sobrancelhas
export const SERVICOS_SOBRANCELHAS: ServicoSobrancelha[] = [
  {
    id: "design-sobrancelhas",
    nome: "Design Personalizado de Sobrancelhas",
    slogan: "Harmonia milimétrica e geometria facial",
    descricao: "Mapeamento facial personalizado e alinhamento dos fios para valorizar a simetria, harmonia e a beleza natural do seu olhar.",
    preco: 45,
    imagem: "/images/studio/design-sobrancelhas.jpg",
    beneficios: [
      "Mapeamento com paquímetro e linha",
      "Respeito ao formato original do rosto",
      "Finalização com acabamento impecável",
    ],
  },
  {
    id: "design-com-henna",
    nome: "Design com Aplicação de Henna",
    slogan: "Destaque e preenchimento de falhas",
    descricao: "Design personalizado com aplicação de henna premium de alta fixação para realçar o formato, corrigir pequenas falhas e destacar o olhar.",
    preco: 55,
    imagem: "/images/studio/design-henna.jpeg",
    beneficios: [
      "Pigmentação gradual e natural",
      "Cobertura de falhas e realce de cor",
      "Durabilidade de 7 a 15 dias na pele",
    ],
  },
  {
    id: "protocolo-recuperacao",
    nome: "Protocolo de Recuperação e Fortalecimento",
    slogan: "Nutrição e estímulo de crescimento",
    descricao: "Tratamento profundo de cuidado e fortalecimento dos fios, auxiliando na recuperação celular e no desenvolvimento de sobrancelhas cheias e saudáveis.",
    preco: 95,
    imagem: "/images/studio/protocolo-recuperacao.jpeg",
    beneficios: [
      "Estimulação de folículos dormentes",
      "Blend exclusivo de vitaminas e óleos nobres",
      "Recuperação de falhas antigas de pinça",
    ],
  },
];

// Tabela de valores para manutenções periódicas
export const DADOS_MANUTENCAO: FaixaManutencao[] = [
  { tecnica: "Brasileiro", ate15Dias: 90, de16a20Dias: 100, de21a25Dias: 120 },
  { tecnica: "Egípcio", ate15Dias: 100, de16a20Dias: 110, de21a25Dias: 120 },
  { tecnica: "Russo", ate15Dias: 110, de16a20Dias: 120, de21a25Dias: 130 },
  { tecnica: "Híbrido", ate15Dias: 120, de16a20Dias: 130, de21a25Dias: 140 },
  { tecnica: "Fox Eyes", ate15Dias: 120, de16a20Dias: 130, de21a25Dias: 140 },
  { tecnica: "Power", ate15Dias: 120, de16a20Dias: 135, de21a25Dias: 145 },
];

// Políticas e regras de convivência do estúdio
export const POLITICAS = [
  {
    titulo: "Pontualidade & Tolerância",
    descricao: "Para garantir que cada cliente tenha seu tempo exclusivo e sem pressa, dispomos de até 15 minutos de tolerância. Atrasos superiores poderão exigir reagendamento para preservar a qualidade da próxima cliente.",
  },
  {
    titulo: "Sinal de Reserva",
    descricao: "Seu horário é reservado exclusivamente para você. O agendamento é confirmado mediante pagamento de um pequeno sinal de reserva, que é abatido integralmente no valor final do procedimento.",
  },
  {
    titulo: "Cancelamento & Reagendamento",
    descricao: "Pedimos aviso prévio com no mínimo 24 horas de antecedência em caso de necessidade de alteração de horário.",
  },
  {
    titulo: "Manutenção dos Cílios",
    descricao: "A manutenção deve ser realizada entre 15 e 25 dias com no mínimo 40% a 50% dos fios ainda fixados. Após 30 dias, será cobrado como um novo procedimento completo.",
  },
  {
    titulo: "Garantia de 7 Dias",
    descricao: "Oferecemos garantia de até 7 dias corridos após a aplicação para qualquer ajuste ou retoque necessário, comprovando nosso compromisso com sua total satisfação.",
  },
  {
    titulo: "Orientações Pré-Atendimento",
    descricao: "Compareça ao estúdio com a região dos olhos totalmente limpa, sem rímel, delineador ou maquiagem à base de óleo, garantindo a máxima aderência da cola.",
  },
];

// Perguntas frequentes para tirar dúvidas de clientes
export const DUVIDAS_FREQUENTES = [
  {
    pergunta: "A extensão de cílios dói ou danifica os cílios naturais?",
    resposta: "Não dói nada! Pelo contrário, muitas clientes relaxam e até dormem durante a aplicação. No Studio Borges, respeitamos rigorosamente a espessura e saúde do seu fio natural, garantindo que ele continue crescendo saudável.",
  },
  {
    pergunta: "Quanto tempo dura uma aplicação?",
    resposta: "Uma aplicação nova leva em média de 1h30 a 2h30, dependendo da técnica escolhida e da quantidade de fios naturais. A manutenção leva entre 1h e 1h30.",
  },
  {
    pergunta: "Como funciona o desconto de 5%?",
    resposta: "Todos os pagamentos realizados via Pix ou dinheiro em espécie recebem automaticamente 5% de desconto no valor total do procedimento ou manutenção.",
  },
  {
    pergunta: "Onde o estúdio está localizado em Osasco?",
    resposta: "Estamos situados na Rua Ulisses Soares, 12 - Bairro Pestana, em Osasco - SP. É um local seguro, tranquilo e com excelente facilidade para estacionar seu veículo.",
  },
];
