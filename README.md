<h1 align="center">⏱️ Fokus</h1>

<p align="center">
  Um app de produtividade baseado na Técnica Pomodoro, com timer de foco, pausas e lista de tarefas.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
</p>

<p align="center">
  <!-- Substitua pelo caminho do seu screenshot ou GIF demonstrativo -->
  <img src="./docs/preview.gif" alt="Demonstração do Fokus" width="800" />
</p>

---

## 📌 Sobre o Projeto

O **Fokus** é uma aplicação web que ajuda a manter a concentração usando a **Técnica Pomodoro**: ciclos de foco de 25 minutos intercalados com pausas curtas (5 min) e longas (15 min). Além do timer, o app traz uma lista de tarefas integrada, para que você saiba exatamente no que trabalhar em cada ciclo, e uma trilha lo-fi opcional para ajudar na imersão.

O projeto resolve um problema comum: a dificuldade de manter o foco e organizar o dia sem alternar entre vários apps. Tudo fica em uma única tela, simples e responsiva, e as tarefas são salvas no próprio navegador.

## ✨ Funcionalidades Principais

- **Timer Pomodoro** com três modos: Foco (25 min), Descanso curto (5 min) e Descanso longo (15 min)
- **Iniciar / pausar** o timer a qualquer momento
- **Tema e banner dinâmicos**: cores, imagem e mensagem mudam conforme o modo ativo
- **Música lo-fi** opcional durante as sessões
- **Lista de tarefas (CRUD)**: adicionar, editar, excluir e marcar como concluída
- **Ações em massa**: limpar tarefas concluídas ou todas as tarefas
- **Persistência local** das tarefas via `localStorage`

## 🛠️ Tecnologias & Ferramentas

| Tecnologia | Descrição |
| --- | --- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" /> **React 19** | Biblioteca de UI (`useActionState`, `<Activity />`) |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" /> **TypeScript** | Tipagem estática |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="20" /> **Vite** | Build tool e servidor de desenvolvimento |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="20" /> **CSS Modules** | Estilos com escopo por componente |
| ⚛️ **React Compiler** | Memoização automática via `babel-plugin-react-compiler` |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="20" /> **ESLint** | Padronização e qualidade de código |

## 🚀 Pré-requisitos e Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) **20.19+** ou **22.12+**
- npm (ou yarn / pnpm)

### Passo a passo

**1. Clone o repositório**

```sh
git clone https://github.com/Fredsongomes/Projeto-Fokus-React.git
cd Projeto-Fokus-React
```

**2. Instale as dependências**

```sh
npm install
# ou
yarn
```

**3. Variáveis de ambiente**

Este projeto **não requer variáveis de ambiente**. Caso sejam adicionadas no futuro, copie o arquivo de exemplo:

```sh
cp .env.example .env
```

**4. Execute em modo de desenvolvimento**

```sh
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Outros scripts

```sh
npm run build      # Checa os tipos e gera o build de produção em /dist
npm run preview    # Serve o build de produção localmente
npm run lint       # Executa o ESLint
npm run typecheck  # Checagem de tipos sem emitir arquivos
```

## 📁 Estrutura de Pastas

```
react-fokus/
├── public/
│   ├── sounds/              # Trilha lo-fi
│   └── mode-*.png           # Imagens de cada modo do timer
├── src/
│   ├── assets/              # Imagens e SVGs importados pelos componentes
│   ├── components/          # Componentes reutilizáveis (cada um com index.tsx + *.module.css)
│   │   ├── Icons/           # Ícones SVG como componentes React
│   │   ├── TimerCard/       # Card do timer
│   │   ├── TimerDisplay/    # Exibição do tempo restante
│   │   ├── MusicToggle/     # Liga/desliga a música
│   │   ├── TaskBoard/       # Container da lista de tarefas
│   │   ├── TaskForm/        # Formulário de criação/edição de tarefas
│   │   ├── TaskList/        # Lista de tarefas
│   │   └── ...
│   ├── App.tsx              # Componente raiz, estado do timer e das tarefas
│   ├── main.tsx             # Ponto de entrada da aplicação
│   ├── types.ts             # Tipos compartilhados (FokusMode, Task)
│   └── index.css            # Estilos globais
├── index.html
├── vite.config.js
└── tsconfig.json
```

## 👤 Autor

Feito por **Fredson Gomes**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fredson-gomes-a8082a338/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fredsongomes)
