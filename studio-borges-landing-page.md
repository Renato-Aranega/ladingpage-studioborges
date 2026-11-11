# Plano de Implementação: Landing Page Studio Borges

## 1. Visão Geral do Projeto
Desenvolvimento de uma Landing Page de altíssimo padrão para o **Studio Borges - Amanda Borges**, com foco em elegância estética, carregamento ultrarrápido, experiência mobile perfeita e alta taxa de conversão direta para o WhatsApp.

## 2. Metas & KPIs
- Design alinhado a estúdios de beleza de alto luxo (Paleta Royal Velvet Purple & Champagne Gold: Ameixa Nobre `#0F0814`, Veludo `#180E21` e Dourado Metálico `#DFB15B`).
- 100% responsivo (Mobile-First otimizado para o perfil do Instagram `@lashamandaborges`).
- Catálogo interativo de procedimentos com fotos reais extraídas do catálogo.
- Tabela interativa de manutenções com filtro por periodicidade e calculadora em tempo real.
- Seção de políticas e orientações claras de pré e pós atendimento.
- Botões de conversão integrados ao WhatsApp com mensagens pré-formatadas para cada procedimento.
- SEO local para Osasco e região.

## 3. Fases de Execução
- [x] **Fase 0: Análise e Extração de Ativos**
  - [x] Inspeção do PDF de catálogo (10 páginas)
  - [x] Extração e catalogação das 16 imagens de alta resolução
  - [x] Definição de tokens no `DESIGN.md`
- [x] **Fase 1: Setup do Projeto e Dependências**
  - [x] Inicialização de projeto React 19 + Vite 8 + Tailwind CSS v4 + Lucide Icons
  - [x] Configuração de fontes (`Playfair Display` e `Plus Jakarta Sans`)
  - [x] Configuração de tema Tailwind com as cores do `DESIGN.md`
- [x] **Fase 2: Componentes Estruturais e de Conteúdo**
  - [x] `Navbar` (logo, links de navegação rápida e CTA de contato)
  - [x] `Hero` (headline marcante, autoridade, foto e CTA principal)
  - [x] `PaymentBanner` (destaque para 5% OFF no Pix ou dinheiro)
  - [x] `LashCatalog` (catálogo dos 6 volumes com foto real, preço e agendamento)
  - [x] `BrowServices` (design, henna e protocolo de recuperação)
  - [x] `MaintenanceTable` (tabela/calculadora interativa de manutenções)
  - [x] `About` (Amanda Borges, experiência, espaço acolhedor e biossegurança)
  - [x] `Policies` (regras de atendimento, tolerância, sinal de agendamento e garantia)
  - [x] `LocationSection` (endereço em Osasco, mapa, facilidade de estacionar)
  - [x] `Faq` (dúvidas frequentes de clientes)
  - [x] `Footer` (rodapé elegante com créditos e redes)
  - [x] `FloatingWhatsApp` (botão flutuante com pulso + barra de conversão mobile fixa)
- [x] **Fase 3: Testes, Otimização e Validação**
  - [x] Verificação de responsividade mobile
  - [x] Verificação de links do WhatsApp com mensagens dinâmicas
  - [x] Build de produção sem erros de TypeScript ou CSS (Vite build em 311ms)
  - [x] Servidor de desenvolvimento ativo em `http://localhost:3000`
