# Especificação Técnica — Página Principal (Landing Page)

## Flicker of Sanity — Jogo Cooperativo de Navegador

---

## 1. Visão Geral

### 1.1 Objetivo

Criar a página principal (landing page) do jogo **Flicker of Sanity**, com foco em atrair novos jogadores, apresentar o conceito do jogo e direcionar os usuários para a criação de conta e início de partida.

### 1.2 Público-Alvo

- Jogadores casuais e hardcore interessados em jogos cooperativos
- Fãs de jogos de tabuleiro digitais e experiências de suspense
- Grupos de amigos buscando experiências multiplayer em navegador

### 1.3 Stack Tecnológica Obrigatória

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 18+ | Framework de UI |
| TypeScript | 5+ | Tipagem estática |

---

## 2. Estrutura da Página

A página é composta por **7 seções principais**, organizadas verticalmente em scroll único:

```
┌─────────────────────────────────────┐
│           HEADER (fixa)             │
├─────────────────────────────────────┤
│         HERO SECTION                │
│   (Trailer + CTA Principal)         │
├─────────────────────────────────────┤
│         SOBRE O JOGO                │
│   (História + Premissa)             │
├─────────────────────────────────────┤
│         FEATURES / DIFERENCIAIS     │
│   (Cards com mecânicas)             │
├─────────────────────────────────────┤
│         COMO JOGAR                  │
│   (Passo a passo simplificado)      │
├─────────────────────────────────────┤
│         CALL TO ACTION              │
│   (Convite para jogar)              │
├─────────────────────────────────────┤
│           FOOTER                    │
│   (Links + Créditos)                │
└─────────────────────────────────────┘
```

---

## 3. Header

### 3.1 Descrição

Header fixa no topo da página, presente em todas as seções. Deve ser responsiva e adaptar-se para mobile (menu hamburger).

### 3.2 Elementos

| Elemento | Comportamento | Estado |
|----------|---------------|--------|
| **Logo** | Clicável, retorna ao topo da página | Sempre visível |
| **Nav Links** | Scroll suave até a seção correspondente | Sempre visível (desktop) |
| **CTA "Jogar Agora"** | Redireciona para página de Login/Cadastro | Sempre visível |
| **Menu Hamburger** | Abre menu mobile com links de navegação | Apenas mobile |

### 3.3 Links de Navegação

| Link | Destino | Tipo |
|------|---------|------|
| Sobre | Scroll para seção "Sobre o Jogo" | Âncora interna |
| Como Jogar | Scroll para seção "Como Jogar" | Âncora interna |
| Regras | Página futura: `/regras` | Rota interna |
| Suporte | Página futura: `/suporte` | Rota interna |

### 3.4 Estados do Header

| Estado | Descrição |
|--------|-----------|
| **Topo da página** | Header transparente, sobrepondo o Hero |
| **Após scroll** | Header com background sólido (escuro), sombra sutil |
| **Mobile** | Menu hamburger, links recolhidos |

---

## 4. Seções da Página

### 4.1 Hero Section

#### 4.1.1 Descrição

Primeira dobra da página, responsável pelo impacto visual imediato. Deve transmitir a atmosfera de suspense e mistério do jogo.

#### 4.1.2 Elementos

| Elemento | Descrição |
|----------|-----------|
| **Background** | Vídeo em loop (muted, autoplay) ou imagem atmosférica do sanatório |
| **Overlay** | Camada escura semi-transparente sobre o background para legibilidade |
| **Título** | "Flicker of Sanity" — tipografia impactante, tema sombrio |
| **Tagline** | Frase de impacto: *"A escuridão consome a realidade. Não deixem suas chamas apagarem."* |
| **CTA Principal** | Botão "Jogar Agora" — destaque visual, redireciona para Login/Cadastro |
| **CTA Secundário** | Botão "Saiba Mais" — scroll suave para seção "Sobre o Jogo" |

#### 4.1.3 Comportamento

- Vídeo/imagem em loop automático, sem controles visíveis
- Texto e CTAs centralizados vertical e horizontalmente
- Animação sutil de entrada (fade-in) ao carregar

---

### 4.2 Sobre o Jogo

#### 4.2.1 Descrição

Apresenta a história e premissa do jogo de forma envolvente, sem revelar demais.

#### 4.2.2 Elementos

| Elemento | Descrição |
|----------|-----------|
| **Título da Seção** | "Sobre o Jogo" ou "A História" |
| **Texto Narrativo** | Resumo da premissa (acordar no sanatório, a carta, a vela, a fuga) |
| **Imagem Ilustrativa** | Arte conceitual ou screenshot do jogo |
| **Badges/Destaques** | Tags: "Cooperativo", "4 Jogadores", "Tempo Real", "Navegador" |

#### 4.2.3 Conteúdo Sugerido (Narrativa)

> *"Vocês acordam no chão frio de um quarto escuro, em uma ala abandonada do Sanatório Flicker of Sanity. A cabeça dói, as memórias são nebulosas, e a escuridão ao redor parece viva..."*

---

### 4.3 Features / Diferenciais

#### 4.3.1 Descrição

Cards destacando as mecânicas únicas do jogo, organizados em grid.

#### 4.3.2 Elementos

| Feature | Ícone/Imagem | Descrição Curta |
|---------|--------------|-----------------|
| **Tabuleiro Dinâmico** | Ícone de peças de caminho | O tabuleiro se reconstrói a cada turno — explore, posicione e descubra |
| **Fog of War** | Ícone de escuridão/neblina | A escuridão consome o que você não vê — apenas o próximo passo é revelado |
| **Monstros** | Ícone de criatura sombria | O Vulto e O Espectro espreitam nos caminhos conectados |
| **Minigames** | Ícone de engrenagem/puzzle | Geradores, Lockpicking, Sala Médica — supere desafios para escapar |
| **Cooperação** | Ícone de grupo | Trabalhe em equipe — resgate aliados e planejem a fuga juntos |
| **Tempo Real** | Ícone de relógio | Partidas ao vivo, direto no navegador — sem downloads |

#### 4.3.3 Layout

- Grid responsivo: 3 colunas (desktop), 2 (tablet), 1 (mobile)
- Cards com hover sutil (elevação, brilho)
- Ícones estilizados com tema sombrio

---

### 4.4 Como Jogar

#### 4.4.1 Descrição

Passo a passo simplificado do fluxo de jogo, sem entrar em detalhes mecânicos profundos.

#### 4.4.2 Elementos

| Passo | Título | Descrição |
|-------|--------|-----------|
| 1 | **Crie sua conta** | Cadastre-se gratuitamente para jogar |
| 2 | **Crie uma sala** | Convide até 3 amigos para sua partida |
| 3 | **Explore o sanatório** | Posicione peças, mova seu peão, descubra caminhos |
| 4 | **Fuja antes que a escuridão vença** | Ligue 3 geradores, pegue o cartão do diretor e escape pelo portão |

#### 4.4.3 Layout

- Timeline vertical ou horizontal com ícones numerados
- Link para documentação completa: "Leia as regras completas →" (rota futura: `/regras`)

---

### 4.5 Call to Action

#### 4.5.1 Descrição

Seção final de conversão, convidando o usuário a jogar.

#### 4.5.2 Elementos

| Elemento | Descrição |
|----------|-----------|
| **Título** | "Pronto para enfrentar a escuridão?" |
| **Subtítulo** | "Crie sua partida agora e convida seus amigos" |
| **CTA Principal** | Botão "Jogar Agora" — redireciona para Login/Cadastro |
| **Indicador Social (opcional)** | "X jogadores online agora" ou "Y partidas ativas" |

---

### 4.6 Footer

#### 4.6.1 Elementos

| Elemento | Descrição |
|----------|-----------|
| **Logo** | Versão reduzida do logo |
| **Links Úteis** | Regras, Suporte, Termos de Uso, Política de Privacidade |
| **Redes Sociais** | Links para redes (se aplicável) |
| **Créditos** | "© 2025 Flicker of Sanity — Todos os direitos reservados" |

---

## 5. Requisitos Funcionais

### RF01 — Navegação por Âncora

| Campo | Descrição |
|-------|-----------|
| **ID** | RF01 |
| **Descrição** | Links do header devem realizar scroll suave até a seção correspondente |
| **Prioridade** | Alta |
| **Critério de Aceite** | Ao clicar em "Sobre", a página scrolla suavemente até a seção "Sobre o Jogo" |

### RF02 — Header com Mudança de Estado

| Campo | Descrição |
|-------|-----------|
| **ID** | RF02 |
| **Descrição** | Header deve mudar de aparência ao scrollar (transparente → sólido) |
| **Prioridade** | Média |
| **Critério de Aceite** | Após 50px de scroll, header ganha background sólido e sombra |

### RF03 — CTA "Jogar Agora"

| Campo | Descrição |
|-------|-----------|
| **ID** | RF03 |
| **Descrição** | Botões "Jogar Agora" devem redirecionar para a página de Login/Cadastro |
| **Prioridade** | Alta |
| **Critério de Aceite** | Ao clicar, usuário é redirecionado para `/login` (rota futura) |

### RF04 — Menu Mobile (Hamburger)

| Campo | Descrição |
|-------|-----------|
| **ID** | RF04 |
| **Descrição** | Em telas menores que 768px, navegação deve ser recolhida em menu hamburger |
| **Prioridade** | Alta |
| **Critério de Aceite** | Menu abre/fecha ao clicar no ícone, com animação suave |

### RF05 — Vídeo em Loop

| Campo | Descrição |
|-------|-----------|
| **ID** | RF05 |
| **Descrição** | Hero section deve exibir vídeo em loop automático, sem som |
| **Prioridade** | Alta |
| **Critério de Aceite** | Vídeo inicia autoplay, muted, loop, sem controles visíveis |

### RF06 — Responsividade

| Campo | Descrição |
|-------|-----------|
| **ID** | RF06 |
| **Descrição** | Página deve ser totalmente responsiva (mobile, tablet, desktop) |
| **Prioridade** | Alta |
| **Critério de Aceite** | Layout adapta-se corretamente em breakpoints: 320px, 768px, 1024px, 1440px |

---

## 6. Requisitos Não-Funcionais

### RNF01 — Performance

| Campo | Descrição |
|-------|-----------|
| **ID** | RNF01 |
| **Descrição** | Tempo de carregamento inicial deve ser inferior a 3 segundos |
| **Métrica** | Lighthouse Performance Score ≥ 80 |
| **Estratégia** | Lazy loading de imagens/vídeo, otimização de assets, code splitting |

### RNF02 — Acessibilidade

| Campo | Descrição |
|-------|-----------|
| **ID** | RNF02 |
| **Descrição** | Página deve seguir diretrizes WCAG 2.1 nível AA |
| **Métrica** | Lighthouse Accessibility Score ≥ 90 |
| **Requisitos** | Alt text em imagens, contraste adequado, navegação por teclado, ARIA labels |

### RNF03 — SEO Básico

| Campo | Descrição |
|-------|-----------|
| **ID** | RNF03 |
| **Descrição** | Página deve conter meta tags essenciais para SEO |
| **Requisitos** | Title, description, Open Graph tags, favicon |

### RNF04 — Cross-Browser

| Campo | Descrição |
|-------|-----------|
| **ID** | RNF04 |
| **Descrição** | Página deve funcionar nos navegadores modernos |
| **Browsers** | Chrome (últimas 2 versões), Firefox, Safari, Edge |

### RNF05 — Animações

| Campo | Descrição |
|-------|-----------|
| **ID** | RNF05 |
| **Descrição** | Animações devem ser sutis e não prejudicar performance |
| **Métrica** | 60fps em dispositivos com hardware padrão |
| **Estratégia** | Usar `transform` e `opacity` para animações (GPU-accelerated) |

---

## 7. User Stories

### US01 — Visitante Explora a Página

| Campo | Descrição |
|-------|-----------|
| **Como** | visitante do site |
| **Quero** | entender o que é o jogo e como funciona |
| **Para** | decidir se quero jogar |

**Critérios de Aceite:**
- Consigo ver o trailer/gameplay na primeira dobra
- Consigo ler a história do jogo
- Consigo ver as mecânicas principais em cards
- Consigo entender o fluxo de jogo em 4 passos

---

### US02 — Visitante Cria Conta para Jogar

| Campo | Descrição |
|-------|-----------|
| **Como** | visitante interessado |
| **Quero** | acessar a página de criação de conta rapidamente |
| **Para** | começar a jogar o mais rápido possível |

**Critérios de Aceite:**
- Botão "Jogar Agora" visível na Hero e no Header
- Ao clicar, sou redirecionado para `/cadastro`
- O botão "Jogar Agora" está presente em pelo menos 2 seções

---

### US03 — Usuário Navega pelo Menu

| Campo | Descrição |
|-------|-----------|
| **Como** | usuário explorando o site |
| **Quero** | navegar entre seções facilmente |
| **Para** | encontrar informações específicas |

**Critérios de Aceite:**
- Links do header scrollam suavemente até a seção
- Menu mobile funciona corretamente
- Header permanece acessível durante todo o scroll

---

## 8. Fluxo de Navegação

```
Página Principal
├── Header (fixa)
│   ├── Logo → Scroll ao topo
│   ├── Sobre → Scroll para seção "Sobre"
│   ├── Como Jogar → Scroll para seção "Como Jogar"
│   ├── Regras → /regras (futura)
│   ├── Suporte → /suporte (futura)
│   └── Jogar Agora → /login ou /cadastro
│
├── Hero Section
│   ├── CTA "Jogar Agora" → /login ou /cadastro
│   └── CTA "Saiba Mais" → Scroll para "Sobre"
│
├── Sobre o Jogo
│   └── Link "Regras Completas" → /regras (futura)
│
├── Features
│   └── Cards com hover interativo
│
├── Como Jogar
│   └── Link "Regras Completas" → /regras (futura)
│
├── Call to Action
│   └── CTA "Jogar Agora" → /login ou /cadastro
│
└── Footer
    ├── Regras → /regras (futura)
    ├── Suporte → /suporte (futura)
    ├── Termos de Uso → /termos (futura)
    └── Política de Privacidade → /privacidade (futura)
```

---

## 9. Assets Necessários

### 9.1 Visuais

| Asset | Formato | Dimensões | Uso |
|-------|---------|-----------|-----|
| Logo do jogo | SVG, PNG | Vetorial + 512x512 | Header, Footer, Hero |
| Trailer/Gameplay | MP4, WebM | 1920x1080 | Hero background |
| Background alternativo | JPG, WebP | 1920x1080 | Fallback para mobile |
| Arte conceitual | JPG, WebP | 800x600 | Seção "Sobre o Jogo" |
| Ícones de features | SVG | 64x64 | Cards de Features |
| Ícone Hamburger | SVG | 32x32 | Menu mobile |

### 9.2 Tipografia

| Uso | Fonte | Peso |
|-----|-------|------|
| Títulos | Fonte com estilo sombrio/gótico | Bold |
| Corpo de texto | Fonte legível e limpa | Regular |
| CTAs | Mesma dos títulos ou similar | Semi-Bold |

### 9.3 Paleta de Cores Sugerida

| Cor | Hex | Uso |
|-----|-----|-----|
| Preto profundo | `#0A0A0F` | Background principal |
| Cinza escuro | `#1A1A2E` | Cards, seções alternadas |
| Roxo escuro | `#16213E` | Acentos, hover states |
| Amarelo chama | `#E2B857` | CTAs, destaques (tema de vela/fogo) |
| Branco suave | `#E8E8E8` | Texto principal |
| Cinza texto | `#A0A0B0` | Texto secundário |

---

## 10. Estrutura de Componentes React Sugerida

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.module.css (ou styled-component)
│   │   └── index.ts
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── index.ts
│   ├── About/
│   │   ├── About.tsx
│   │   └── index.ts
│   ├── Features/
│   │   ├── Features.tsx
│   │   ├── FeatureCard.tsx
│   │   └── index.ts
│   ├── HowToPlay/
│   │   ├── HowToPlay.tsx
│   │   ├── Step.tsx
│   │   └── index.ts
│   ├── CallToAction/
│   │   ├── CallToAction.tsx
│   │   └── index.ts
│   └── Footer/
│       ├── Footer.tsx
│       └── index.ts
├── pages/
│   └── LandingPage.tsx
├── hooks/
│   └── useScrollPosition.ts
├── types/
│   └── landing.ts
└── assets/
    ├── images/
    ├── videos/
    └── icons/
```

---

## 11. Glossário

| Termo | Definição |
|-------|-----------|
| **Hero Section** | Primeira dobra da página, acima do scroll |
| **CTA** | Call to Action — botão ou link que incentiva uma ação |
| **Fog of War** | Mecânica de escuridão/neblina que esconde partes do tabuleiro |
| **Breakpoint** | Ponto de largura de tela onde o layout se adapta (responsivo) |
| **Lighthouse** | Ferramenta do Google para métricas de performance e acessibilidade |
| **WCAG** | Web Content Accessibility Guidelines |

---

## 12. Notas para a Equipe de Desenvolvimento

1. **Stack obrigatória**: React + TypeScript
2. **Estilização**: A definir pela equipe (CSS Modules, Styled Components, Tailwind, etc.)
3. **Animações**: Priorizar `transform` e `opacity` para performance (GPU-accelerated)
4. **Vídeo**: Fornecer fallback de imagem estática para mobile/baixa conexão
5. **Rotas futuras**: `/login`, `/cadastro`, `/regras`, `/suporte`, `/termos`, `/privacidade`
6. **Estado do usuário**: Preparar header para exibir nome do usuário quando logado (integração futura com auth)
7. **Internacionalização**: Considerar i18n desde o início (jogo pode ter versões em outros idiomas)

---

*Documento criado em Agosto de 2025 — Versão 1.0*
*Autor: Product Owner — Projeto Flicker of Sanity*
