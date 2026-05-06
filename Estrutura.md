# 🔴 Pokédex — Projeto de Faculdade

Plataforma web em **React + TypeScript** que busca dados de Pokémon pela [PokéAPI](https://pokeapi.co/), exibindo card com foto, descrição, atributos e cadeia evolutiva completa.

---

## 📋 Pré-requisitos

Antes de tudo, você precisa ter instalado na sua máquina:

| Ferramenta | Versão mínima | Download |
|------------|---------------|---------|
| **Node.js** | 18.x ou superior | https://nodejs.org |
| **npm** | 9.x ou superior | (vem junto com o Node.js) |

Para verificar se já tem instalado, abra o terminal e rode:

```bash
node -v
npm -v
```

---

## 🚀 Como rodar o projeto

### 1. Abra a pasta no VS Code

Abra o terminal integrado do VS Code com `Ctrl + `` ` `` ` (backtick) ou vá em **Terminal → New Terminal**.

### 2. Instale as dependências

```bash
npm install
```

> Isso vai baixar todas as bibliotecas necessárias (React, TypeScript, Vite). Aguarde finalizar.

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 4. Acesse no navegador

O terminal vai exibir algo como:

```
  VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

Abra **http://localhost:5173** no seu navegador. 🎉

---

## 🎮 Como usar

1. Digite o **nome de um Pokémon** em inglês no campo de busca (ex: `Charmander`, `Pikachu`, `Eevee`)
2. Pressione **Enter** ou clique em **Buscar**
3. Ou clique em um dos **chips de sugestão** abaixo do campo

O card exibirá:
- 📸 Arte oficial do Pokémon
- 🏷️ Tipos com cores correspondentes
- 📖 Descrição do Pokédex
- 📏 Altura, Peso, Exp. base e Habilidades
- 📊 Barra de atributos (HP, ATK, DEF, SpA, SpD, SPD)
- 🔗 Cadeia evolutiva completa (ex: Charmander → Charmeleon → Charizard)

---

## 🛑 Parar o servidor

No terminal, pressione `Ctrl + C`.

---

## 📦 Build para produção (opcional)

Para gerar uma versão otimizada para deploy:

```bash
npm run build
```

Os arquivos ficarão na pasta `dist/`.

---

## 🗂️ Estrutura do projeto

```
pokedex/
├── public/
│   └── pokeball.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── PokemonCard.tsx   # Card principal do Pokémon
│   │   ├── PokemonCard.css
│   │   ├── EvolutionChain.tsx # Cadeia evolutiva
│   │   ├── EvolutionChain.css
│   │   ├── SearchBar.tsx     # Barra de busca
│   │   └── SearchBar.css
│   ├── hooks/
│   │   └── usePokemon.ts     # Lógica de busca (custom hook)
│   ├── styles/
│   │   └── global.css        # Estilos globais
│   ├── types/
│   │   └── pokemon.ts        # Interfaces TypeScript
│   ├── utils/
│   │   ├── api.ts            # Chamadas à PokéAPI
│   │   └── theme.ts          # Cores por tipo e helpers
│   ├── App.tsx               # Componente raiz
│   ├── App.css
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚠️ Observações

- O projeto consome a **PokéAPI** (gratuita, sem necessidade de chave de API).
- É necessário ter **conexão com a internet** para carregar os dados e imagens.
- Os nomes devem ser digitados em **inglês** (ex: `Charizard`, não `Charizardo`).
