// Tratamentos que a clínica divulga no Instagram (@essenciale), cada um com a sua página em
// /tratamentos/<slug>/. Textos educativos e sem promessa de resultado: o que é, para que costuma
// ser procurado, como é feito, cuidados e dúvidas. Sem marcas de aparelhos ou produtos, sem preço,
// sem antes e depois e sem urgência. A clínica deve revisar cada página antes da divulgação.
//
// "Lipo sem cirurgia", como a clínica chama o método no Instagram, aparece aqui como
// "gordura localizada": "lipo" lembra lipoaspiração, que é cirurgia e é feita por médico.
import type { NomeIcone } from "./icones.ts";

export type Categoria = "Rosto" | "Corpo";

export interface Tratamento {
  slug: string;
  nome: string;
  categoria: Categoria;
  /** Ícone do tratamento, nos cartões e no topo da página. */
  icone: NomeIcone;
  /** Parte em itálico do título, depois do nome. */
  destaque: string;
  /** Uma frase: aparece nos cartões e na descrição para o Google. */
  resumo: string;
  /** Complemento da mensagem do WhatsApp: "...uma avaliação <assunto>." */
  assunto: string;
  oQueE: string[];
  indicacoes: string[];
  etapas: { titulo: string; texto: string }[];
  ficha: { termo: string; texto: string }[];
  cuidados: string[];
  duvidas: { p: string; r: string }[];
}

export const tratamentos: Tratamento[] = [
  {
    slug: "pele-de-rainha",
    nome: "Pele de Rainha",
    categoria: "Rosto",
    icone: "coroa",
    destaque: "a base da beleza.",
    assunto: "do protocolo Pele de Rainha",
    resumo:
      "Protocolo da Essenciale para a qualidade da pele: luminosidade, hidratação, textura e elasticidade, cuidando da epiderme e da derme.",
    oQueE: [
      "Tudo começa pela qualidade da pele. O Pele de Rainha é o protocolo da Essenciale que trabalha a epiderme e a derme com foco em luminosidade, hidratação, textura e elasticidade, estimulando a produção de colágeno.",
      "As técnicas e as tecnologias de cada sessão são escolhidas na avaliação, conforme o tipo e as necessidades da sua pele. Ele também é a primeira camada do Padrão Ouro do Rejuvenescimento da clínica.",
    ],
    indicacoes: ["Pele opaca ou sem viço", "Textura irregular e poros aparentes", "Perda de firmeza e elasticidade", "Preparo da pele para outros tratamentos"],
    etapas: [
      { titulo: "Avaliação da pele", texto: "Análise do tipo de pele, do que incomoda você e da sua rotina de cuidados." },
      { titulo: "Plano personalizado", texto: "Técnicas, número de sessões e cuidados em casa, pensados para a sua pele." },
      { titulo: "Sessões", texto: "Feitas na clínica, no ritmo combinado no plano." },
      { titulo: "Acompanhamento", texto: "Reavaliação da pele e ajustes do protocolo ao longo do caminho." },
    ],
    ficha: [
      { termo: "Foco", texto: "Epiderme e derme: luminosidade, hidratação, textura e firmeza" },
      { termo: "Sessões", texto: "Definidas na avaliação, conforme a sua pele" },
      { termo: "Efeito", texto: "Gradual, conforme a pele se renova" },
      { termo: "Volta à rotina", texto: "Geralmente no mesmo dia, com os cuidados orientados" },
    ],
    cuidados: [
      "Usar protetor solar todos os dias.",
      "Manter a pele hidratada, com os produtos indicados na avaliação.",
      "Evitar sol intenso nos dias seguintes às sessões.",
    ],
    duvidas: [
      { p: "Serve para qualquer tipo de pele?", r: "O protocolo é ajustado para cada pele. As técnicas são escolhidas na avaliação, de acordo com o tipo de pele e o que você quer melhorar." },
      { p: "Posso combinar com a harmonização facial?", r: "Sim. A clínica trabalha o Pele de Rainha junto com a harmonização facial quando faz sentido para o seu caso: a pele cuidada valoriza os contornos." },
      { p: "Quantas sessões são necessárias?", r: "Depende da sua pele e do objetivo. O número de sessões é definido no plano, depois da avaliação." },
    ],
  },
  {
    slug: "harmonizacao-facial",
    nome: "Harmonização facial",
    categoria: "Rosto",
    icone: "rosto",
    destaque: "com proporção e naturalidade.",
    assunto: "de harmonização facial",
    resumo:
      "Planejamento para valorizar contornos e proporções do rosto, como maçãs, lábios e mandíbula, respeitando a sua anatomia e a sua expressão.",
    oQueE: [
      "A harmonização facial é um planejamento que trabalha contornos e proporções: maçãs do rosto, lábios, queixo e linha da mandíbula. O objetivo é equilíbrio e elegância, sem mudar quem você é.",
      "As técnicas são definidas na avaliação, a partir dos seus traços. Quando o plano inclui procedimentos injetáveis, eles são feitos por profissional habilitado(a), com produtos registrados na Anvisa.",
    ],
    indicacoes: ["Contorno da mandíbula e do queixo", "Maçãs do rosto e sustentação", "Equilíbrio dos lábios", "Proporção entre os traços"],
    etapas: [
      { titulo: "Análise facial", texto: "Fotos, proporções e conversa sobre o que você quer valorizar." },
      { titulo: "Plano de tratamento", texto: "Quais técnicas, em que ordem e em quantas etapas, explicadas antes de começar." },
      { titulo: "Aplicações", texto: "Feitas na clínica, com anestesia tópica ou local conforme a técnica." },
      { titulo: "Retorno", texto: "Para avaliar cada etapa e ajustar o plano, se for preciso." },
    ],
    ficha: [
      { termo: "Técnicas", texto: "Definidas no plano, conforme os seus traços" },
      { termo: "Anestesia", texto: "Tópica ou local, conforme a técnica" },
      { termo: "Sessões", texto: "Definidas no plano; podem ser feitas em etapas" },
      { termo: "Duração", texto: "Varia conforme a técnica e o organismo de cada pessoa" },
    ],
    cuidados: [
      "Inchaço e pequenos hematomas podem aparecer e somem aos poucos.",
      "Evitar exercício intenso, calor e bebida alcoólica nas primeiras 24 a 48 horas.",
      "Seguir as orientações específicas de cada técnica, passadas na clínica.",
    ],
    duvidas: [
      { p: "Vai mudar muito o meu rosto?", r: "O planejamento busca equilíbrio, respeitando a sua anatomia e a sua expressão. Você conhece o plano antes de começar." },
      { p: "Preciso fazer tudo de uma vez?", r: "Não. O plano pode ser dividido em etapas, conforme a sua prioridade." },
      { p: "É reversível?", r: "Depende da técnica. O ácido hialurônico, por exemplo, pode ser dissolvido com uma enzima, se for preciso. Isso é explicado na avaliação." },
    ],
  },
  {
    slug: "lifting-sem-cirurgia",
    nome: "Lifting sem cirurgia",
    categoria: "Rosto",
    icone: "elevar",
    destaque: "firmeza e sustentação.",
    assunto: "de lifting sem cirurgia",
    resumo: "Técnicas e tecnologias não cirúrgicas para a firmeza e a sustentação do rosto, com efeito gradual e sem cortes.",
    oQueE: [
      "Com o tempo, a pele e as estruturas que a sustentam perdem firmeza, e o rosto perde definição. O lifting sem cirurgia trabalha essa sustentação com técnicas e tecnologias que estimulam colágeno e firmeza, sem cortes.",
      "O efeito aparece aos poucos, conforme os tecidos respondem. É a segunda camada do Padrão Ouro do Rejuvenescimento da clínica, entre a qualidade da pele e os contornos.",
    ],
    indicacoes: ["Flacidez leve a moderada", "Contorno do rosto menos definido", "Papada e pescoço", "Aspecto cansado na face"],
    etapas: [
      { titulo: "Avaliação", texto: "Análise da flacidez, da pele e do que você quer melhorar." },
      { titulo: "Plano", texto: "Técnicas, regiões e número de sessões." },
      { titulo: "Sessões", texto: "Feitas na clínica, sem cortes." },
      { titulo: "Acompanhamento", texto: "Reavaliação da evolução e combinação da manutenção." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Sem cortes, definida na avaliação" },
      { termo: "Efeito", texto: "Gradual, ao longo de semanas" },
      { termo: "Sessões", texto: "Definidas na avaliação" },
      { termo: "Volta à rotina", texto: "Geralmente no mesmo dia" },
    ],
    cuidados: ["Usar protetor solar todos os dias.", "Manter a pele hidratada.", "Seguir as orientações específicas da técnica usada."],
    duvidas: [
      { p: "Substitui um lifting cirúrgico?", r: "Não. É indicado para flacidez leve a moderada. Casos mais avançados podem precisar de avaliação médica." },
      { p: "Quando aparece a diferença?", r: "O efeito é gradual: a firmeza melhora ao longo das semanas, conforme os tecidos respondem." },
      { p: "Sente-se algum desconforto?", r: "Algumas tecnologias causam calor ou pequenas pontadas durante a sessão. A intensidade é ajustada para cada pessoa." },
    ],
  },
  {
    slug: "gordura-localizada",
    nome: "Gordura localizada",
    categoria: "Corpo",
    icone: "medida",
    destaque: "sem cirurgia.",
    assunto: "para gordura localizada",
    resumo:
      "Método personalizado com tecnologias não invasivas para a gordura localizada em regiões como abdômen, flancos e culotes, sem cortes.",
    oQueE: [
      "É o método personalizado da Essenciale para a gordura localizada: um protocolo que combina tecnologias não invasivas, escolhidas na avaliação, para as regiões que resistem à dieta e ao exercício.",
      "Não é um tratamento para emagrecer e não substitui alimentação equilibrada e atividade física: o foco é o contorno de regiões específicas.",
    ],
    indicacoes: ["Abdômen", "Flancos", "Culotes e coxas", "Braços e costas"],
    etapas: [
      { titulo: "Avaliação", texto: "Medidas, fotos e conversa sobre a sua rotina e o que você deseja." },
      { titulo: "Protocolo", texto: "Tecnologias e número de sessões definidos para o seu corpo." },
      { titulo: "Sessões", texto: "Feitas na clínica, sem cortes." },
      { titulo: "Reavaliação", texto: "Novas medidas e fotos para acompanhar a evolução." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Tecnologias não invasivas, combinadas no protocolo" },
      { termo: "Sessões", texto: "Definidas na avaliação" },
      { termo: "Efeito", texto: "Gradual, ao longo das sessões" },
      { termo: "Volta à rotina", texto: "Geralmente no mesmo dia" },
    ],
    cuidados: [
      "Beber bastante água ao longo do tratamento.",
      "Manter alimentação equilibrada e atividade física.",
      "Seguir as orientações de cada sessão, passadas na clínica.",
    ],
    duvidas: [
      { p: "Emagrece?", r: "Não. O protocolo trata gordura localizada em regiões específicas; o peso na balança muda pouco." },
      { p: "Quantas sessões vou precisar?", r: "Depende da região e do seu corpo. O número de sessões é definido no protocolo, depois da avaliação." },
      { p: "Quem não pode fazer?", r: "Gestantes e pessoas com algumas condições de saúde não devem fazer. Esses pontos são conferidos na avaliação." },
    ],
  },
  {
    slug: "definicao-muscular",
    nome: "Definição muscular",
    categoria: "Corpo",
    icone: "musculo",
    destaque: "além do treino.",
    assunto: "de definição muscular",
    resumo: "Tecnologia de estimulação muscular para trabalhar tônus e definição de abdômen, glúteos, braços e pernas, sem cirurgia.",
    oQueE: [
      "Músculos fortes não garantem definição. As tecnologias de estimulação muscular provocam contrações intensas na região tratada e trabalham tônus e definição de um jeito que o treino sozinho nem sempre alcança.",
      "Elas complementam o treino e a alimentação, não os substituem. A região, a intensidade e o número de sessões são definidos na avaliação.",
    ],
    indicacoes: ["Abdômen", "Glúteos", "Braços", "Coxas"],
    etapas: [
      { titulo: "Avaliação", texto: "Análise da região, da sua rotina de treino e do que você deseja." },
      { titulo: "Protocolo", texto: "Regiões, intensidade e número de sessões." },
      { titulo: "Sessões", texto: "Você fica deitada enquanto a tecnologia trabalha a musculatura." },
      { titulo: "Reavaliação", texto: "Para acompanhar a evolução e ajustar o protocolo." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Estimulação muscular por tecnologia, sem agulhas" },
      { termo: "Sensação", texto: "Contrações intensas durante a sessão" },
      { termo: "Sessões", texto: "Definidas na avaliação" },
      { termo: "Volta à rotina", texto: "Imediata" },
    ],
    cuidados: [
      "Beber bastante água nos dias das sessões.",
      "Manter a atividade física e a alimentação equilibrada.",
      "Uma sensação parecida com a de depois do treino pode aparecer e passa em pouco tempo.",
    ],
    duvidas: [
      { p: "Substitui a academia?", r: "Não. A tecnologia complementa o treino e a alimentação, trabalhando a musculatura de um jeito diferente." },
      { p: "Dói?", r: "A sessão causa contrações intensas, que a maioria das pessoas tolera bem. A intensidade é ajustada para você." },
      { p: "Quem não pode fazer?", r: "Gestantes, pessoas com dispositivos eletrônicos implantados ou metais na região, entre outros casos conferidos na avaliação." },
    ],
  },
  {
    slug: "contorno-gluteo",
    nome: "Contorno glúteo",
    categoria: "Corpo",
    icone: "contorno",
    destaque: "curvas com naturalidade.",
    assunto: "de contorno glúteo",
    resumo: "Protocolo para firmeza, tônus e contorno dos glúteos, combinando técnicas para a musculatura e para a pele da região.",
    oQueE: [
      "O contorno glúteo combina técnicas para a musculatura e para a qualidade da pele da região, com foco em firmeza, tônus e contorno. Não é só para o verão: curvas valorizadas aparecem também na saia, no jeans e na alfaiataria.",
      "O plano é individual: depende da sua anatomia, do seu objetivo e da avaliação da pele e da musculatura.",
    ],
    indicacoes: ["Falta de firmeza", "Pouco tônus muscular", "Flacidez da pele", "Aspecto de celulite"],
    etapas: [
      { titulo: "Avaliação", texto: "Análise da região, da pele e do seu objetivo." },
      { titulo: "Plano", texto: "Técnicas combinadas e número de sessões." },
      { titulo: "Sessões", texto: "Feitas na clínica, sem cirurgia." },
      { titulo: "Acompanhamento", texto: "Reavaliações para acompanhar a evolução." },
    ],
    ficha: [
      { termo: "Técnicas", texto: "Combinadas para musculatura e pele, conforme o plano" },
      { termo: "Sessões", texto: "Definidas na avaliação" },
      { termo: "Efeito", texto: "Gradual, ao longo das sessões" },
      { termo: "Volta à rotina", texto: "Geralmente no mesmo dia" },
    ],
    cuidados: [
      "Beber bastante água ao longo do tratamento.",
      "Manter o treino de glúteos, se orientado na avaliação.",
      "Seguir as orientações de cada técnica, passadas na clínica.",
    ],
    duvidas: [
      { p: "Aumenta o tamanho do bumbum?", r: "O foco é firmeza, tônus e contorno. O que é possível no seu caso é conversado com franqueza na avaliação." },
      { p: "Posso continuar treinando?", r: "Sim. O treino ajuda, e a clínica orienta como encaixar as sessões na sua rotina." },
      { p: "Quantas sessões vou precisar?", r: "Depende do seu objetivo e da avaliação. O número de sessões é definido no plano." },
    ],
  },
  {
    slug: "flacidez-corporal",
    nome: "Flacidez corporal",
    categoria: "Corpo",
    icone: "ondas",
    destaque: "firmeza para a pele.",
    assunto: "para flacidez",
    resumo: "Tecnologias que agem nas camadas profundas da pele para estimular colágeno e trabalhar a firmeza de abdômen, braços, coxas e glúteos.",
    oQueE: [
      "Com o passar dos anos, e principalmente depois dos 40, a pele perde colágeno e firmeza, e o exercício e a dieta já não alcançam essas camadas. As tecnologias para flacidez agem nos tecidos profundos e estimulam a produção de colágeno.",
      "O efeito é gradual, conforme o colágeno novo se forma. As regiões e o número de sessões são definidos na avaliação.",
    ],
    indicacoes: ["Abdômen", "Braços", "Parte interna das coxas", "Glúteos"],
    etapas: [
      { titulo: "Avaliação", texto: "Análise da pele e da flacidez em cada região." },
      { titulo: "Protocolo", texto: "Tecnologias, regiões e número de sessões." },
      { titulo: "Sessões", texto: "Feitas na clínica, sem cortes." },
      { titulo: "Acompanhamento", texto: "Reavaliação da evolução e da manutenção." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Tecnologias que agem nas camadas profundas da pele" },
      { termo: "Efeito", texto: "Gradual, ao longo de semanas" },
      { termo: "Sessões", texto: "Definidas na avaliação" },
      { termo: "Volta à rotina", texto: "Geralmente no mesmo dia" },
    ],
    cuidados: ["Beber bastante água.", "Manter a pele hidratada.", "Seguir as orientações de cada sessão."],
    duvidas: [
      { p: "Quando vejo diferença?", r: "O colágeno se forma aos poucos: a firmeza melhora ao longo das semanas, não de um dia para o outro." },
      { p: "Funciona junto com o tratamento de gordura localizada?", r: "Os dois podem ser combinados no mesmo plano, quando faz sentido para o seu caso. Isso é definido na avaliação." },
      { p: "Quem não pode fazer?", r: "Gestantes e pessoas com algumas condições de saúde. Esses pontos são conferidos na avaliação." },
    ],
  },
];

export const categorias: Categoria[] = ["Rosto", "Corpo"];

export const porCategoria = (c: Categoria) => tratamentos.filter((t) => t.categoria === c);

export const porSlug = (slug: string) => {
  const t = tratamentos.find((x) => x.slug === slug);
  if (!t) throw new Error(`Tratamento não encontrado: ${slug}`);
  return t;
};

export const iconeDaCategoria: Record<Categoria, NomeIcone> = { Rosto: "rosto", Corpo: "contorno" };

// Ícones da ficha "Em resumo" e das etapas, escolhidos pelo texto. O que não tiver
// correspondência usa o ícone do próprio tratamento (por exemplo, "Técnica" e "Sessões" de aplicação).
const ICONES_DA_FICHA: [RegExp, NomeIcone][] = [
  [/dura[cç][aã]o/i, "ampulheta"],
  [/efeito/i, "evolucao"],
  [/rotina/i, "maleta"],
  [/anestesia/i, "gota"],
  [/sess[oõ]es/i, "calendario"],
  [/sensa[cç][aã]o/i, "termometro"],
  [/foco/i, "brilho"],
  [/t[eé]cnicas/i, "camadas"],
];

const ICONES_DA_ETAPA: [RegExp, NomeIcone][] = [
  [/whatsapp/i, "conversa"],
  [/reavalia|retorno|acompanhamento/i, "calendario"],
  [/an[aá]lise|avalia/i, "prancheta"],
  [/plano|protocolo/i, "lista"],
];

const procurar = (lista: [RegExp, NomeIcone][], texto: string, padrao: NomeIcone) =>
  lista.find(([regra]) => regra.test(texto))?.[1] ?? padrao;

export const iconeDaFicha = (termo: string, t: Tratamento) => procurar(ICONES_DA_FICHA, termo, t.icone);
export const iconeDaEtapa = (titulo: string, t: Tratamento) => procurar(ICONES_DA_ETAPA, titulo, t.icone);
