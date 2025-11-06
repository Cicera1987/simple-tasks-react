# Simple Tasks React

Aplicação simples em **React + TypeScript** com **JSON Server**, criada para gerenciamento básico de tasks (tarefas).  
O projeto é dividido em **frontend** e **backend**, com uma configuração que permite rodar tudo diretamente da raiz.

---

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Axios](https://axios-http.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [React Router DOM](https://reactrouter.com/)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- [Concurrently](https://www.npmjs.com/package/concurrently)

---

## Estrutura do Projeto

\`\`\`
simple-tasks-react/
├─ backend/
│ ├─ db.json
│ ├─ package.json
│ └─ node_modules/
├─ frontend/
│ ├─ src/
│ ├─ package.json
│ └─ node_modules/
├─ .gitignore
├─ package.json
└─ README.md
\`\`\`

---

## ⚙️ Instalação

### 1️⃣ Clonar o repositório

\`\`\`bash
git clone https://github.com/Cicera1987/simple-tasks-react.git
cd simple-tasks-react
\`\`\`

### 2️⃣ Instalar dependências

**Backend:**
\`\`\`bash
cd backend
npm install
cd ..
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm install
cd ..
\`\`\`

**Raiz do Projeto:**
\`\`\`bash
npm install
\`\`\`

---

## Como rodar o projeto

\`\``bash
npm run dev
\`\`\`

---

## Sobre o Projeto

Este projeto foi desenvolvido como um teste prático frontend, com os seguintes requisitos:

- Formulário para adicionar novas tasks (título e descrição)
- Página "Home" para criação de tasks
- Página "Lista de Tasks" para visualizar, editar e excluir
- Persistência de dados usando JSON Server
- Pelo menos um teste unitário

---

## Scripts principais

| Comando               | Descrição                        |
| --------------------- | -------------------------------- |
| `npm run dev`         | Roda o backend e frontend juntos |
| `npm run frontend`    | Roda apenas o frontend           |
| `npm run backend`     | Roda apenas o backend            |
| `npm install`         | Instala dependências da raiz     |
| `npm test` (frontend) | Roda testes unitários            |

---

## Autor

**Cícera Ribeiro**  
Desenvolvedora Fullstack

🔗 [cicera.ribeiro@rede.ulbra.br]

🔗 https://github.com/Cicera1987

🔗 https://www.linkedin.com/in/cicera-ribeiro-/

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
