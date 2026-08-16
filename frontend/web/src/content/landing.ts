export interface NavItem {
  label: string
  href: string
  isAnchor: boolean
}

export interface Feature {
  title: string
  description: string
  icon: 'board' | 'fog' | 'monster' | 'minigame' | 'coop' | 'clock'
}

export interface Step {
  number: number
  title: string
  description: string
}

export interface FooterLink {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre', isAnchor: true },
  { label: 'Como Jogar', href: '#como-jogar', isAnchor: true },
  { label: 'Regras', href: '/regras', isAnchor: false },
  { label: 'Suporte', href: '/suporte', isAnchor: false },
]

export const hero = {
  title: 'Flicker of Sanity',
  tagline: 'A escuridão consome a realidade. Não deixem suas chamas apagarem.',
  ctaPrimary: 'Jogar Agora',
  ctaPrimaryHref: '/cadastro',
  ctaSecondary: 'Saiba Mais',
  ctaSecondaryHref: '#sobre',
}

export const about = {
  title: 'Sobre o Jogo',
  narrative:
    'Vocês acordam no chão frio de um quarto escuro, em uma ala abandonada do Sanatório Flicker of Sanity. A cabeça dói, as memórias são nebulosas, e a escuridão ao redor parece viva. Uma carta rasgada no bolso. Uma vela prestes a apagar. A única saída é trabalhar juntos — antes que a escuridão vença.',
  badges: ['Cooperativo', '4 Jogadores', 'Tempo Real', 'Navegador'],
}

export const features: Feature[] = [
  {
    title: 'Tabuleiro Dinâmico',
    description:
      'O tabuleiro se reconstrói a cada turno — explore, posicione e descubra caminhos nunca antes vistos.',
    icon: 'board',
  },
  {
    title: 'Fog of War',
    description:
      'A escuridão consome o que você não vê — apenas o próximo passo é revelado.',
    icon: 'fog',
  },
  {
    title: 'Monstros',
    description:
      'O Vulto e O Espectro espreitam nos caminhos conectados, prontos para atacar.',
    icon: 'monster',
  },
  {
    title: 'Minigames',
    description:
      'Geradores, Lockpicking, Sala Médica — supere desafios para escapar do sanatório.',
    icon: 'minigame',
  },
  {
    title: 'Cooperação',
    description:
      'Trabalhe em equipe — resgate aliados e planejem a fuga juntos.',
    icon: 'coop',
  },
  {
    title: 'Tempo Real',
    description:
      'Partidas ao vivo, direto no navegador — sem downloads necessários.',
    icon: 'clock',
  },
]

export const steps: Step[] = [
  {
    number: 1,
    title: 'Crie sua conta',
    description: 'Cadastre-se gratuitamente para jogar.',
  },
  {
    number: 2,
    title: 'Crie uma sala',
    description: 'Convide até 3 amigos para sua partida.',
  },
  {
    number: 3,
    title: 'Explore o sanatório',
    description: 'Posicione peças, mova seu peão, descubra caminhos.',
  },
  {
    number: 4,
    title: 'Fuja antes que a escuridão vença',
    description: 'Ligue 3 geradores, pegue o cartão do diretor e escape pelo portão.',
  },
]

export const cta = {
  title: 'Pronto para enfrentar a escuridão?',
  subtitle: 'Crie sua partida agora e convide seus amigos',
  buttonLabel: 'Jogar Agora',
  buttonHref: '/cadastro',
}

export const footer = {
  copyright: '© 2025 Flicker of Sanity — Todos os direitos reservados',
  links: [
    { label: 'Regras', href: '/regras' },
    { label: 'Suporte', href: '/suporte' },
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Política de Privacidade', href: '/privacidade' },
  ] as FooterLink[],
}
