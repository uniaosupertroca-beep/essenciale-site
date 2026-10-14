# Site da Essenciale

Site da **Essenciale Estética e Cosméticos**, de Balneário Camboriú (SC): página principal e uma página para cada tratamento. É um site estático, sem JavaScript no navegador, publicado no Cloudflare Pages a cada envio para a `main`.

**Endereço:** https://essenciale-estetica.pages.dev

## De onde vêm os dados

Só do Instagram da clínica ([@essenciale](https://www.instagram.com/essenciale/)), em outubro de 2026:

- nome, cidade e os dois WhatsApp da bio ("Recepção / Agenda" e "Atendimento");
- os tratamentos que a clínica divulga: Pele de Rainha, harmonização facial, lifting sem cirurgia, gordura localizada ("lipo sem cirurgia"), definição muscular, contorno glúteo e flacidez;
- o "Padrão Ouro do Rejuvenescimento" em três camadas (pele, sustentação e contornos);
- "20 anos" de estética e as frases da marca ("ciência, técnica e naturalidade", "a sua melhor versão").

O que o Instagram não informa fica marcado no site como "a preencher", e o build lista o que falta (veja abaixo).

## Identidade

- **Cores:** ameixa (`#2a171c`), rosé (`#c99a92`), nude (`#f4e8e2`) e pérola (`#fbf6f2`), com detalhes em dourado.
- **Fontes:** Cormorant Garamond nos títulos (com uma parte em itálico rosé) e Jost no texto, servidas pelo próprio site.
- **Marca:** enquanto o logo oficial não chega, o nome aparece escrito em serifa (`src/components/Marca.astro`). O monograma "E" com brilho é o ícone da aba.
- **Fotos:** a abertura mostra um arco com o monograma. Com uma foto em `src/assets/fotos/abertura.jpg`, o arco passa a mostrar a foto sozinho.

## Regras de publicidade

Os textos seguem o Código de Defesa do Consumidor (art. 37) e as regras de publicidade dos conselhos de saúde:

- sem preço, desconto ou urgência ("vagas limitadas");
- sem promessa de resultado ("elimina rugas", "resultado garantido", "sem riscos", "sem dor");
- sem antes e depois e sem depoimentos;
- sem marcas de aparelhos ou produtos;
- "lipo sem cirurgia" aparece como **gordura localizada**: "lipo" lembra lipoaspiração, que é cirurgia e é feita por médico.

A conferência do build (`scripts/conferir.mjs`) barra a publicação se alguma dessas frases aparecer.

**Antes de divulgar:** a clínica deve revisar os textos de cada tratamento e informar o nome, a profissão e o registro no conselho do(a) responsável técnico(a), que a publicidade em saúde exige.

## Dados da clínica

Tudo fica em `src/data/clinica.ts`. Falta a clínica mandar:

- [ ] nome, profissão e registro no conselho do(a) responsável técnico(a)
- [ ] endereço completo (rua, número, bairro e CEP)
- [ ] CNPJ
- [ ] horários de atendimento
- [ ] logo oficial e fotos (ambiente, equipe)

Os tratamentos ficam em `src/data/tratamentos.ts`: um item novo vira uma página nova, com cartão na lista e entrada no sitemap.

## Publicação

O GitHub Actions gera, confere e publica o site a cada envio para a `main` (`.github/workflows/publicar.yml`). Ele precisa de um segredo no repositório:

1. Crie um token no Cloudflare com a permissão **Conta → Cloudflare Pages → Editar**, por este link já preenchido:
   https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22page%22%2C%22type%22%3A%22edit%22%7D%5D&accountId=%2A&zoneId=all&name=Essenciale%20Pages
2. Em https://github.com/uniaosupertroca-beep/essenciale-site/settings/secrets/actions/new, escreva `CLOUDFLARE_API_TOKEN` em **Name**, cole o token em **Secret** e clique em **Add secret**. Nunca mande o token por chat.

**Domínio próprio:** em Cloudflare → Workers e Pages → `essenciale-estetica` → Domínios personalizados. Depois troque `endereco` em `src/data/clinica.ts`.

## Comandos

```sh
npm ci            # instala
npm run dev       # site local em http://localhost:4321
npm run build     # gera dist/ e roda a conferência
```

Para refazer a prévia de link (`public/og.png`) e o ícone do iPhone: `npx -y playwright@1.56.1 install chromium && node scripts/gerar-imagens.mjs`.

## Estrutura

```
src/data/clinica.ts        contatos, endereço, redes e responsável técnico(a)
src/data/tratamentos.ts    textos de cada tratamento (uma página por item)
src/data/icones.ts         ícones em SVG (sem biblioteca externa)
src/pages/                 home, tratamentos, privacidade, 404, robots.txt e sitemap.xml
src/components/            uma seção por arquivo (Abertura, Essencia, PadraoOuro, Corpo…)
src/styles/global.css      cores, fontes, títulos e botões
public/_headers            cabeçalhos de segurança (CSP sem scripts, HSTS) e cache
scripts/conferir.mjs       conferência depois do build
```
