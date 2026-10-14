// Tudo o que é da clínica fica aqui: contatos, endereço, redes e responsável técnico(a).
// Fontes (out/2026): o Instagram (@essenciale) e o site atual da clínica (essencialeestetica.com.br).
// Campo com null ainda não foi informado: o site mostra um espaço marcado "a preencher" e o
// build lista o que falta.

export interface Responsavel {
  /** Nome como deve aparecer no site. */
  nome: string | null;
  /** Profissão como deve aparecer, ex.: "Biomédica esteta", "Fisioterapeuta dermatofuncional". */
  profissao: string | null;
  /** Conselho e número, ex.: "CRBM-5 nº 12345". A publicidade em saúde exige o registro do(a) responsável técnico(a). */
  registro: string | null;
  /** true para responsável técnica, false para responsável técnico. */
  feminino: boolean | null;
}

export const clinica = {
  nome: "Essenciale",
  nomeCompleto: "Essenciale Estética e Cosméticos",
  /** Endereço oficial do site (canônico, sitemap e prévia de link). Troque quando houver domínio próprio. */
  endereco: "https://essenciale-estetica.pages.dev",
  /** Anos de estética, como a clínica divulga ("20 anos transformando histórias"). */
  anos: 20,
  /** Essenciale Estetic Center Ltda, no mesmo endereço. */
  cnpj: "10.904.998/0001-02" as string | null,
  cidade: "Balneário Camboriú",
  uf: "SC",
  /** Rua e número. O CEP é o do Google Maps (o cadastro do CNPJ traz 88330-503). */
  rua: "Rua 1542, 25, loja 03" as string | null,
  bairro: "Centro" as string | null,
  cep: "88330-622" as string | null,
  /** Ficha da clínica no Google Maps: rota, fotos e avaliações. */
  googleMaps: "https://maps.google.com/?cid=14233690009980832611",
  /** Nota e número de avaliações no Google, conferidos em out/2026. */
  avaliacoes: { nota: "4,9", total: 75 },
  /** Quem criou a clínica, como ela se apresenta no site atual. Não é, por si, o(a) responsável técnico(a). */
  idealizadora: { nome: "Dra. Cláudia Braga", desde: 2007, foto: "claudia-braga.png" },
  /** Ex.: ["Segunda a sexta, das 9h às 19h"]. */
  horarios: null as string[] | null,
  whatsapp: {
    /** "Recepção / Agenda", no Instagram: é o número dos botões de agendamento. */
    agenda: "5547996500077",
    /** "Atendimento WhatsApp", o primeiro link da bio. */
    atendimento: "554799920232",
    mensagem: "Olá! Vim pelo site da Essenciale e gostaria de agendar uma avaliação.",
  },
  redes: {
    instagram: "https://www.instagram.com/essenciale/",
  },
  responsavel: {
    nome: null,
    profissao: null,
    registro: null,
    feminino: null,
  } as Responsavel,
};

export const linkWhatsapp = (mensagem: string = clinica.whatsapp.mensagem, numero: string = clinica.whatsapp.agenda): string =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

/** Mensagem pronta para pedir avaliação de um tratamento ("do protocolo Pele de Rainha"). */
export const mensagemPara = (assunto: string) => `Olá! Vim pelo site da Essenciale e gostaria de agendar uma avaliação ${assunto}.`;

/** "(47) 99650-0077" ou "(47) 9992-0232", a partir do número do WhatsApp. */
export const telefone = (numero: string = clinica.whatsapp.agenda): string => {
  const n = numero.replace(/^55/, "");
  return `(${n.slice(0, 2)}) ${n.slice(2, n.length - 4)}-${n.slice(-4)}`;
};

export const temEndereco = () => Boolean(clinica.rua && clinica.cep);

export const enderecoCompleto = () =>
  temEndereco() ? `${clinica.rua}, ${clinica.bairro ? `${clinica.bairro}, ` : ""}${clinica.cidade} (${clinica.uf}), CEP ${clinica.cep}` : null;

const destino = () => encodeURIComponent(`${clinica.rua?.replace(/, loja \d+$/, "")}, ${clinica.cidade} - ${clinica.uf}, ${clinica.cep}`);
export const linkRotaGoogle = () => `https://www.google.com/maps/dir/?api=1&destination=${destino()}`;
export const linkRotaWaze = () => `https://waze.com/ul?q=${destino()}&navigate=yes`;

/** "Responsável técnica", "Responsável técnico" ou "Responsável técnico(a)". */
export const rotuloResponsavel = (r: Responsavel = clinica.responsavel) =>
  r.feminino === null ? "Responsável técnico(a)" : r.feminino ? "Responsável técnica" : "Responsável técnico";

/** O que a clínica ainda precisa mandar. Aparece no fim do build. */
export function pendencias(): string[] {
  const falta: string[] = [];
  const r = clinica.responsavel;
  if (!r.nome) falta.push("Nome do(a) responsável técnico(a) (responsavel.nome)");
  if (!r.profissao) falta.push("Profissão do(a) responsável técnico(a) (responsavel.profissao)");
  if (!r.registro) falta.push("Registro no conselho, ex.: CRBM-5 nº 12345 (responsavel.registro)");
  if (r.feminino === null) falta.push("Se é responsável técnica ou técnico (responsavel.feminino)");
  if (!temEndereco()) falta.push("Endereço completo: rua, número, bairro e CEP (rua, bairro, cep)");
  if (!clinica.cnpj) falta.push("CNPJ (cnpj)");
  if (!clinica.horarios) falta.push("Horários de atendimento (horarios)");
  return falta;
}
