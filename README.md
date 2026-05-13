# React To-Do List

Aplicação de lista de tarefas desenvolvida com React como projeto de aprendizado e motivação para praticar os conceitos fundamentais da biblioteca.

---

## Sobre o Projeto

O objetivo é construir uma To-Do List completa, responsiva e funcional — com foco especial na experiência mobile — integrando autenticação com conta Google e armazenamento de dados em nuvem via Firebase.

### Funcionalidades planejadas

- Login com conta Google
- Criar, editar e deletar tarefas
- Campos por tarefa: Task, Description, Category, When (data/hora), Priority e Fulfillment
- Slider visual de progresso (Fulfillment)
- Checkmark para marcar uma tarefa como concluída
- Filtros: All, To-do e Completed
- Dados salvos por usuário no Firestore (cada usuário vê apenas suas próprias tarefas)
- Layout responsivo — funciona em celular e computador

---

## Tecnologias

- [React](https://react.dev) via Vite
- JavaScript
- CSS Modules
- [Firebase](https://firebase.google.com) — Authentication (Google) e Firestore

---

## Estrutura de Pastas

```
src/
├── assets/
│   └── icons/                  # Ícones customizados da interface
│
├── components/
│   ├── Header/                 # Título da aplicação no topo da página
│   ├── FilterBar/              # Botões de filtro: All, To-do, Completed
│   ├── TodoTable/              # Tabela que lista todas as tarefas
│   ├── TodoRow/                # Linha individual de uma tarefa na tabela
│   ├── Modal/                  # Modal para criar ou editar uma tarefa
│   ├── FulfillmentSlider/      # Slider visual de progresso da tarefa
│   └── Login/                  # Tela de login com botão Google
│
├── context/
│   └── AuthContext.jsx         # Gerencia o estado do usuário logado globalmente
│
├── hooks/
│   └── useTodos.js             # Lógica de CRUD das tarefas (criar, ler, editar, deletar)
│
├── services/
│   └── firebase.js             # Configuração e inicialização do Firebase
│
├── App.jsx                     # Componente raiz — decide se exibe Login ou a aplicação
├── App.module.css
├── main.jsx                    # Ponto de entrada do React
└── index.css                   # Estilos globais
```

---

## Variáveis de Ambiente

As credenciais do Firebase ficam em um arquivo `.env` na raiz do projeto. Este arquivo **não vai para o repositório** (está no `.gitignore`).

Copie o arquivo `.env.example` e preencha com as credenciais do seu projeto Firebase:

```bash
cp .env.example .env
```

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

## Como Rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## Autor

Luis Felipe Schmitt
