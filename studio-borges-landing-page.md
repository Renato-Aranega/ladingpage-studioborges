# Plano de Implementação: Landing Page Studio Borges

## 1. Visão Geral do Projeto
Desenvolvimento de uma Landing Page de altíssimo padrão para o **Studio Borges - Amanda Borges**, com foco em elegância estética, carregamento ultrarrápido, experiência mobile perfeita e alta taxa de conversão direta para o WhatsApp.

## 2. Metas & KPIs
- Design alinhado a estúdios de beleza de alto luxo (Paleta Royal Velvet Purple & Champagne Gold: Ameixa Nobre `#0F0814`, Veludo `#180E21` e Dourado Metálico `#DFB15B`).
- Modo Claro e Escuro dinâmicos com alternador acessível.
- 100% responsivo (Mobile-First otimizado para o perfil do Instagram `@lashamandaborges`).
- Catálogo interativo de procedimentos com fotos reais em aspect ratio vertical (4:5) e modal de zoom em alta resolução.
- Tabela interativa de manutenções com filtro por periodicidade e calculadora em tempo real.
- Redução de ruído visual: cards selecionáveis com CTA magnético e pulsante.
- Aba de feedbacks e avaliações de clientes reais (nota 5.0).
- ScrollSpy no Header indicando a seção ativa da página.
- Botões de conversão integrados ao WhatsApp com mensagens pré-formatadas para cada procedimento.
- Favicon e identidade visual lapidados.

## 3. Fases de Execução
- [x] **Fase 0: Análise e Extração de Ativos**
  - [x] Inspeção do PDF de catálogo (10 páginas)
  - [x] Extração e catalogação das imagens de alta resolução
  - [x] Definição de tokens no `DESIGN.md`
- [x] **Fase 1: Setup do Projeto e Dependências**
  - [x] Inicialização de projeto React 19 + Vite 8 + Tailwind CSS v4 + Lucide Icons
  - [x] Configuração de fontes (`Playfair Display` e `Plus Jakarta Sans`)
  - [x] Configuração de tema Tailwind com suporte a Dark e Light Mode
- [x] **Fase 2: Componentes Estruturais e de Conteúdo**
  - [x] `Navbar` com ScrollSpy, logo nítido e alternador de Tema (Sol/Lua)
  - [x] `Hero` de alto impacto com foto da fundadora e badges
  - [x] `PaymentBanner` com destaque para 5% OFF no Pix
  - [x] `LashCatalog` com fotos em proporção 4:5, cards selecionáveis e CTA magnético
  - [x] `BrowServices` com fotos corrigidas e combo facial
  - [x] `ModalFoto` para visualização ampliada dos procedimentos em alta resolução
  - [x] `MaintenanceTable` com calculadora interativa
  - [x] `About` destacando biossegurança, conforto e produtos Anvisa
  - [x] `Feedbacks` com avaliações 5 estrelas e depoimentos reais
  - [x] `Policies` com orientações pré e pós atendimento
  - [x] `LocationSection` com mapa e facilidade de estacionar
  - [x] `Faq` respondendo às principais objeções
  - [x] `Footer` com navegação e créditos
  - [x] `FloatingWhatsApp` com barra fixa mobile otimizada
- [x] **Fase 3: Testes, Git e Publicação**
  - [x] Revisão e refinamento do `.gitignore`
  - [x] Código, variáveis e comentários 100% em Português Brasileiro
  - [x] Sincronização e push nas branches `main` e `desenvolve` no GitHub
  - [x] Build de produção verificado com 0 erros (364ms)
