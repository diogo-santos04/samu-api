# 🌐 SAMU Escalas - API REST

API RESTful desenvolvida em **Node.js** com **TypeScript** para fornecer os dados e operações do sistema de escalas do SAMU.

> Esta API é utilizada pelo aplicativo mobile:  
> 🔗 [Repositório do App Mobile](https://github.com/seuusuario/samu-escalas-app)

---

## ⚙️ Tecnologias

- Node.js
- TypeScript
- Express
- Prisma 
- PostgreSQL
- JWT
- CORS
- Dotenv

---

## 📦 Como executar o projeto

```bash
# 1. Instale as dependências
npm install

# 2. Configure o arquivo .env com:
# - PORT
# - DATABASE_URL
# - JWT_SECRET

# 3. Rode as migrations 
npx prisma migrate dev

# 4. Inicie o servidor em modo de desenvolvimento
npm run dev
``
