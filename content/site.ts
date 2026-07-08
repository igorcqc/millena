// Central content/data for the page — copy lives here, not hardcoded in components,
// per 24-component-architecture.md (content/structure separation).

export const site = {
  name: "Millena Curty",
  credential: "CRO-SP 159622",
  role: "Cirurgiã-dentista especialista em harmonização orofacial",
  instagramHandle: "@dra.millenacurty",
  instagramUrl: "https://www.instagram.com/dra.millenacurty",
  whatsappNumber: "5511993837749",
  cities: ["São Paulo", "Goiânia"],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  hero: "Olá! Vi a página e quero agendar uma avaliação de harmonização facial.",
  procedures: "Olá! Quero saber mais sobre os procedimentos de harmonização facial.",
  finalCta: "Olá! Gostaria de agendar minha avaliação com a Dra. Millena Curty.",
};

export const procedures = [
  {
    title: "Preenchimento Labial",
    description:
      "Volume e contorno com ácido hialurônico, respeitando a proporção natural do rosto.",
  },
  {
    title: "Toxina Botulínica",
    description:
      "Suavização de linhas de expressão sem perder a mobilidade e a expressividade do rosto.",
  },
  {
    title: "Bioestimulador de Colágeno",
    description:
      "Estímulo à produção natural de colágeno para firmeza e viço progressivos.",
  },
  {
    title: "Contorno Facial",
    description:
      "Definição de mandíbula, malar e queixo com base na anatomia óssea de cada paciente.",
  },
  {
    title: "Fios de Sustentação",
    description: "Efeito lifting sem cirurgia, reposicionando tecidos com resultado imediato.",
  },
  {
    title: "Skinbooster",
    description: "Hidratação profunda da pele para textura, luminosidade e maciez.",
  },
];

// Real before/after photos sent by the client via WhatsApp/Instagram.
// Files are not yet in the repo — see /public/images/resultados/README.md.
// Each entry renders a clearly marked "pending" placeholder until the real
// file exists at `src`, per 06-social-proof.md (never fabricate proof).
export const results = [
  {
    id: "resultado-1",
    label: "Preenchimento em pontos estratégicos para melhorar o aspecto de cansaço e contorno facial",
    src: "/images/resultados/resultado-1.jpg",
  },
  {
    id: "resultado-2",
    label: "Detalhes que fazem toda a diferença — pontos estratégicos para realçar traços que já eram bonitos",
    src: "/images/resultados/resultado-2.jpg",
  },
  {
    id: "resultado-3",
    label: "Rosto mais fino, mais marcado e de forma natural",
    src: "/images/resultados/resultado-3.jpg",
  },
];

// Real patient messages sent by the client (WhatsApp screenshots), kept
// anonymous since no full name/consent-to-identify was provided — per
// 06-social-proof.md, real and specific beats named-but-fabricated.
export const testimonials = [
  {
    quote:
      "Já estou me amando, passei só um blush! Obrigada pela delicadeza! Você é maravilhosa, talentosa! Eu morria de medo de fazer procedimentos e ficar muito artificial, mas você me trouxe confiança, sempre realçando nossos traços, indico sempre de olhos fechados.",
    attribution: "Paciente da Dra. Millena Curty · via WhatsApp",
  },
  {
    quote: "O queixo tá perfeitooo, amei muito.",
    attribution: "Paciente da Dra. Millena Curty · via WhatsApp",
  },
  {
    quote: "Quase 1 mês após, Dra. Sigo apaixonada e ansiosa pra próxima etapa.",
    attribution: "Paciente da Dra. Millena Curty · via WhatsApp",
  },
  {
    quote:
      "Quando eu fazia com outra profissional sempre inchava e ficava roxo, e com a Dra. ficou normal. Zero dor, inchaço e roxo. Muito obrigada pelo resultado entregue.",
    attribution: "Paciente da Dra. Millena Curty · via WhatsApp",
  },
];

export const faqs = [
  {
    question: "A harmonização facial dói?",
    answer:
      "Usamos anestésicos tópicos e agulhas finas para reduzir o desconforto. A maioria das pacientes relata sensação leve, tolerável durante a consulta.",
  },
  {
    question: "Vou ficar com cara de \"procedimento\", artificial?",
    answer:
      "O planejamento é feito em cima da sua anatomia óssea e facial, não de um padrão pronto — o objetivo declarado é realçar, não uniformizar. Ainda assim, resultado é sempre uma conversa: na avaliação você alinha exatamente o quanto de mudança faz sentido para você.",
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer:
      "Varia por procedimento: preenchimentos costumam durar entre 8 e 18 meses, toxina botulínica entre 4 e 6 meses, e bioestimuladores de colágeno podem durar mais — isso é conversado caso a caso na avaliação.",
  },
  {
    question: "Existe tempo de recuperação?",
    answer:
      "A maioria dos procedimentos tem recuperação rápida, com possível vermelhidão ou inchaço leve nas primeiras 24-48 horas. Orientações específicas de pós-procedimento são passadas individualmente.",
  },
  {
    question: "Por que fazer harmonização com uma dentista?",
    answer:
      "Harmonização orofacial é uma especialidade odontológica: exige entender oclusão, estrutura óssea e musculatura da face — não só a estética de superfície. A Dra. Millena é cirurgiã-dentista (CRO-SP 159622) especializada nisso.",
  },
  {
    question: "Quanto custa?",
    answer:
      "O valor depende do que faz sentido para o seu rosto e objetivos, definidos na avaliação. Agende pelo WhatsApp para receber um orçamento personalizado, sem compromisso.",
  },
  {
    question: "Atende em qual cidade?",
    answer: "Atendimento em São Paulo e Goiânia. Fale pelo WhatsApp para confirmar agenda e endereço.",
  },
];
