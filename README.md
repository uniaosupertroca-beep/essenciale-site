# Site da Essenciale

Site da **Essenciale Estética e Cosméticos**, de Balneário Camboriú (SC): página principal, galeria da clínica e uma página para cada tratamento. É um site estático, sem JavaScript no navegador, publicado no Cloudflare Pages a cada envio para a `main`.

**Endereço:** https://essenciale-estetica.pages.dev

## De onde vêm os dados

Do Instagram da clínica ([@essenciale](https://www.instagram.com/essenciale/)) e do site atual (essencialeestetica.com.br), em outubro de 2026:

- **Instagram:** nome, os dois WhatsApp da bio ("Recepção / Agenda" e "Atendimento"), "20 anos", o Padrão Ouro do Rejuvenescimento e os tratamentos divulgados.
- **Site atual:** endereço, a Dra. Cláudia Braga (idealizadora desde 2007), os protocolos Pele de Rainha, Bumbum das Estrelas e de diástase, a estética íntima feminina, a consultoria online, o logo em vetor, o retrato da Dra. Cláudia e as fotos do ambiente.
- **Google Maps:** nota 4,9 com 75 avaliações (ficha ligada no site).
- **CNPJ:** 10.904.998/0001-02 (Essenciale Estetic Center Ltda), no mesmo endereço.

Ficaram de fora, de propósito: as fotos de antes e depois, as fotos de corpo em roupa íntima e os depoimentos (regras de publicidade em saúde), e os nomes comerciais dos aparelhos.

## Identidade

- **Cores:** o malva do logo (`#8d5f6a`), ameixa (`#2a171c`), rosé (`#c99a92`), nude (`#f4e8e2`) e pérola (`#fbf6f2`), com detalhes em dourado.
- **Fontes:** Cormorant Garamond nos títulos (com uma parte em itálico rosé) e Jost no texto, servidas pelo próprio site.
- **Logo:** redesenhado em HTML e CSS a partir do perfil do Instagram (`src/components/Marca.astro`): "ESSENCIALE" em serifa espaçada, numa moldura fina, com "estética & cosméticos" no traço de baixo. Fica nítido em qualquer tela e muda de cor conforme o fundo. O monograma "E" com brilho, em malva, é o ícone da aba.
- **Fotos:** em `src/assets/fotos/`. A abertura mostra o corredor em arco (`abertura.jpg`), a seção da idealizadora mostra o retrato da Dra. Cláudia, a galeria "Nossa clínica" usa as sete fotos `clinica-*.jpg`, e cada tratamento tem a sua foto no topo da página (campo `foto` em `tratamentos.ts`). As fotos do ambiente vêm do site atual, em 672 px: fotos maiores deixariam o arco da abertura mais nítido.

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
- [ ] horários de atendimento
- [ ] qual WhatsApp é o principal (o Instagram tem dois e o site atual usa um terceiro, (47) 99785-3781)
- [ ] fotos do ambiente em resolução maior
- [ ] confirmar o CEP: o Google Maps mostra 88330-622 e o cadastro do CNPJ, 88330-503

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
src/components/            uma seção por arquivo (Abertura, Essencia, PadraoOuro, Corpo, Clinica…)
src/assets/fotos/          fotos da clínica, do retrato e dos tratamentos (otimizadas no build)
public/logo-essenciale*.svg  logo oficial, rosé e branco
src/styles/global.css      cores, fontes, títulos e botões
public/_headers            cabeçalhos de segurança (CSP sem scripts, HSTS) e cache
scripts/conferir.mjs       conferência depois do build
```
