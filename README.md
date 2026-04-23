# Trợ lý AI

Bo khung fullstack cho app tro ly AI phuc vu viec hoc, duoc nang cap tu cac trang HTML san co sang:

- `frontend/`: React + Vite + React Router
- `backend/`: Express API, auth, chat Gemini, PostgreSQL-ready
- `server.js`: entrypoint backend

## Chay local

1. Cai dependencies:

```bash
npm install
npm --prefix frontend install
```

2. Tao file `.env` dua tren `.env.example`.

3. Chay backend:

```bash
npm run dev
```

4. Chay frontend:

```bash
npm run dev:frontend
```

Frontend mac dinh chay o `http://localhost:5173`, backend o `http://localhost:5000`.

## PostgreSQL

Them `DATABASE_URL` vao `.env`, sau do chay schema trong [backend/schema.sql](/C:/xampp/htdocs/backend/schema.sql:1).

Neu chua cau hinh PostgreSQL, backend van dung `users.json` lam file fallback trong giai doan migration.
