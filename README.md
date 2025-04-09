
---

### 🌐 `README.md` – API Node.js

```markdown
# 🌐 SAMU Escalas - API REST

API RESTful desenvolvida em **Node.js** com **TypeScript** para fornecer os dados e operações do sistema de escalas do SAMU de Campo Grande.

> Esta API é utilizada pelo aplicativo mobile:  
> 🔗 [Repositório do App Mobile](https://github.com/seuusuario/samu-escalas-app)

## ⚙️ Tecnologias

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL 
- JWT para autenticação
- CORS
- Dotenv

## 📦 Como executar o projeto

```bash
# Instale as dependências
npm install

# Configure o .env com:
# - PORT
# - DATABASE_URL
# - JWT_SECRET

# Rode as migrations
npx prisma migrate dev

# Inicie a API
npm run dev
