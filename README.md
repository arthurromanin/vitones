# Vitones

Landing page de uma página para divulgar e vender aulas particulares de violão e guitarra com o professor Victor Teixeira.

Site estático, sem build tooling: HTML + CSS + JavaScript puro (vanilla), sem framework e sem dependências instaladas — só bibliotecas via CDN (Font Awesome e Google Fonts).

## Estrutura

```
vitones/
├── HTML/vitones.html   # a página inteira
├── CSS/vitones.css     # todo o estilo
├── JS/vitones.js       # interações (navbar, tabs, menu, scroll-reveal, contador)
└── images/             # fotos e logo usados na página
```

## Como abrir localmente

Como todos os caminhos são relativos, basta abrir `HTML/vitones.html` direto no navegador (duplo clique) — funciona sem servidor.

Se preferir servir localmente (mais fiel ao ambiente de produção):

```bash
# a partir da raiz do repositório
python -m http.server 8000
# depois acesse http://localhost:8000/HTML/vitones.html
```

## Deploy

Por ser um site 100% estático, pode ser publicado gratuitamente em GitHub Pages, Netlify, Vercel ou Cloudflare Pages, sem nenhum passo de build.

## ✅ Checklist antes de publicar

O site tem conteúdo de exemplo em alguns pontos, marcado no código com comentários `SUBSTITUIR`. **Não publique sem revisar:**

- [ ] **Depoimentos** (`HTML/vitones.html`, seção `#testimonials`): são exemplos fictícios — trocar por avaliações reais de alunos (com autorização deles).
- [ ] **Números de credibilidade** (seção `#stats`: anos de experiência, alunos, avaliação): valores de exemplo — confirmar os números reais.
- [ ] **Localização** (aba "Localização" em `#classes` e no FAQ): tem um placeholder `[cidade a definir]` — preencher a região real de atendimento presencial.
- [ ] **Frase de vagas limitadas** (seção `#prices`): confirmar se reflete a realidade do professor.
- [ ] **Política de cancelamento** (FAQ): confirmar a política real antes de publicar.
- [ ] **Open Graph / SEO** (`<head>` do HTML): as tags `og:image`, `og:url` etc. usam `https://SEU-DOMINIO-AQUI` como placeholder — trocar pela URL real assim que o site for publicado, para os links ficarem bonitos ao compartilhar no WhatsApp/Instagram.
- [ ] Conferir telefone/WhatsApp, Instagram e e-mail no rodapé e na seção de contato.

## Possíveis próximos passos

- Comprimir/otimizar as imagens (`show.jpeg`, `teste.jpeg`, foto do hero) para carregamento mais rápido.
- Adicionar Google Analytics ou outra ferramenta de métricas, se desejado.
- Registrar um domínio próprio e atualizar as tags de Open Graph.
