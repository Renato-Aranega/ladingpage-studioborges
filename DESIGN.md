---
name: Studio Borges — Warm Editorial Atelier
version: 3.0.0
colors:
  bg-primary: "#0E0C0A"
  bg-elevated: "#171411"
  bg-light-section: "#F4EFEA"
  text-main: "#F5F2EB"
  text-dark: "#171411"
  text-muted: "#9E9689"
  text-muted-dark: "#5C5449"
  accent-champagne: "#C5A880"
  accent-champagne-dark: "#7A5E3A"
  border-hairline: "rgba(197, 168, 128, 0.18)"
  border-hairline-dark: "rgba(23, 20, 17, 0.15)"
typography:
  display-hero:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 4.5vw, 4.2rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  heading-section:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.25rem, 3.8vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  heading-item:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  indexer:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
  body-default:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.01em"
rounded:
  none: "0px"
  sharp: "2px"
  media: "4px"
spacing:
  section-y: "112px"
  gutter: "32px"
  compact: "16px"
components:
  button-primary:
    backgroundColor: "{colors.accent-champagne}"
    textColor: "{colors.bg-primary}"
    rounded: "{rounded.sharp}"
    padding: "16px 28px"
  hairline-divider:
    borderColor: "{colors.border-hairline}"
    height: "1px"
---

# Studio Borges — Warm Editorial Atelier Specification

## Overview
Sistema visual **Warm Editorial Atelier** desenvolvido para o **Studio Borges (Amanda Borges — Osasco/SP)**, inspirado em editoriais de beleza contemporâneos (Aesop, Chanel Beauty, Byredo e Glossier). A direção de arte abandona gradientes neon, sombras brilhantes, cartões repetitivos e tons roxos em favor de superfícies foscas terrosas, alternância intencional entre escuro profundo (`#0E0C0A`) e linho cru claro (`#F4EFEA`), fotografia macro limpa e tipografia serifada de alta costura.

## Colors
- **Obsidian Espresso (`#0E0C0A`)**: Canvas principal nas seções escuras (`Hero`, `Cílios`, `Manutenção`, `Políticas`, `Localização`, `Footer`).
- **Warm Charcoal (`#171411`)**: Superfície sutil elevada para faixas informativas (`PaymentBanner`), hover de tabelas e seção de citações (`Feedbacks`), além da tinta principal nas seções claras.
- **Alabaster / Linho Cru (`#F4EFEA`)**: Fundo das seções claras (`Catálogo de Sobrancelhas`, `Sobre Amanda`, `Perguntas Frequentes`), criando ritmo editorial e destacando tons naturais de pele.
- **Off-White Quente (`#F5F2EB`)**: Texto principal nas seções escuras.
- **Taupe Editorial (`#9E9689` / `#5C5449`)**: Textos secundários e metadados.
- **Champagne Fosco (`#C5A880`)**: Acento exclusivo em superfícies escuras, substituindo dourados saturados. Em fundos claros (`#F4EFEA`), usa-se bronze champagne escurecido (`#7A5E3A`) para garantir legibilidade WCAG AA.
- **Hairlines (`rgba(197, 168, 128, 0.18)` / `rgba(23, 20, 17, 0.15)`)**: Linhas secas divisórias de `1px`.

## Typography
- **Display & Títulos**: `Cormorant Garamond` (pesos 300 Light e 400 Regular + itálico editorial), alinhada à esquerda, escala fluida `clamp(2.5rem, 4.5vw, 4.2rem)`, `letter-spacing: -0.02em`, `line-height: 1.08`.
- **Corpo & Interface**: `Plus Jakarta Sans` (pesos 300, 400, 500, 600), auto-hospedada via `@fontsource`, com `font-variant-numeric: tabular-nums` em preços e indexadores.
- **Indexadores de Seção**: Caixa alta com tracking `0.2em`, formato `01 — SOBRE O ATELIÊ`, sem bordas de pílula e sem ícones.

## Layout
- Alternância rítmica entre escuro (`#0E0C0A` / `#171411`) e claro (`#F4EFEA`).
- Grid máximo de `max-w-7xl`, generoso espaçamento vertical (`py-24 lg:py-32`), zero card-itis.
- **Lookbook de Serviços**: Fotografias verticais `4:5` (`border-radius: 4px`), título e preço alinhados na mesma linha abaixo da foto, especificação seca e ação `AGENDAR PROCEDIMENTO ↗`.
- **Split-Screen Sticky (40% / 60%)**: Políticas e Dúvidas Frequentes com coluna esquerda fixa durante a rolagem e acordeão de linhas horizontais com símbolo `+` rotacionando `45deg`.

## Elevation & Depth
- Sem sombras luminosas (`box-shadow` glow proibido). Profundidade criada por contraste tonal (`#0E0C0A` vs `#171411` vs `#F4EFEA`), linhas secas de `1px`, sobreposição assimétrica de 2 imagens e textura de grão editorial (`opacity: 0.025`).

## Shapes
- Cantos vivos arquitetônicos: `2px` em botões e controles, `4px` em frames fotográficos e mapa. Zero `rounded-full` em botões primários, tags de seção ou cartões.

## Components
- **Botão Primário**: Preenchimento sólido matte `#C5A880` com texto `#0E0C0A`, transição slide-fill horizontal para `#F5F2EB` e deslocamento diagonal de `3px` na seta `↗`.
- **Animações**: Hook `IntersectionObserver` com curva cinematográfica `cubic-bezier(0.16, 1, 0.3, 1)` para revelação em cascata (`revelar-scroll`), desenho de linhas (`linha-desenho`) e escala de cortina nas imagens (`imagem-cortina`).

## Do's and Don'ts
- **Do**: Preservar todos os preços, regras de manutenção, políticas, endereço e cálculos do simulador originais.
- **Do**: Aplicar filtro `grayscale(100%) invert(92%) contrast(85%)` no mapa do Google Maps e utilizar apenas fotos limpas e bem recortadas (sem datas impressas ou capturas de tela).
- **Don't**: Usar tons roxos/violetas, emojis, ícones dentro de quadrados translúcidos, pill badges decorativas, títulos centralizados bicolores ou box-shadows brilhantes.
