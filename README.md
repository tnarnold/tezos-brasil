# Tezos Brasil Website

Este é um site estático informativo sobre Tezos (XTZ), focado no público brasileiro.

## Estrutura do Projeto

- **index.html**: Página inicial.
- **tezos.html**: O que é Tezos.
- **como-funciona.html**: Detalhes técnicos (PoS, Governança).
- **carteiras.html**: Guia de carteiras.
- **recursos.html**: Links e ferramentas do ecossistema.
- **contato.html**: Formulário de contato/comunidade.
- **assets/**: Imagens e ícones.
- **styles.css**: Estilos globais.
- **script.js**: Funcionalidades interativas.

## Como Rodar Localmente

### Opção 1: Docker (Recomendado)

1. Construa a imagem:
   ```bash
   docker build -t tezos-website .
   ```
2. Rode o container:
   ```bash
   docker run -d -p 8080:80 tezos-website
   ```
3. Acesse `http://localhost:8080`

### Opção 2: Python

Se você tiver Python instalado:
```bash
python3 -m http.server
```
Acesse `http://localhost:8000`

## Como Publicar no Cloudflare Pages

1. Faça push deste código para um repositório Git (GitHub/GitLab).
2. Acesse o painel do Cloudflare Pages.
3. Crie um novo projeto e conecte seu repositório.
4. **Configurações de Build**:
   - **Framework Preset**: None (ou Estático)
   - **Build command**: (Deixe em branco)
   - **Build output directory**: (Deixe em branco ou use `/` se for obrigatório, mas geralmente branco funciona para a raiz)
5. Clique em "Save and Deploy".

O arquivo `_headers` incluído configura cabeçalhos de segurança automaticamente.
