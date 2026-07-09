# Server

Express + TypeScript + Prisma (PostgreSQL) API with JWT auth.

## Stack

- Node.js / Express 5
- TypeScript
- Prisma 7 (`@prisma/client` + `@prisma/adapter-pg`)
- PostgreSQL
- JWT (`jsonwebtoken`)
- Zod (validation)
- bcrypt (password hashing)
- dotenv

## Setup

1. Copy `.env.example` to `.env` and update `DATABASE_URL`, `JWT_SECRET`, etc.
2. Install dependencies:
   ```
   npm install
   ```
3. Run migrations (requires a running PostgreSQL database):
   ```
   npm run prisma:migrate
   ```
4. Start the dev server:
   ```
   npm run dev
   ```

## Scripts

- `npm run dev` – start the dev server with hot reload
- `npm run build` – compile TypeScript to `dist`
- `npm start` – run the compiled server
- `npm run prisma:generate` – regenerate the Prisma client
- `npm run prisma:migrate` – run Prisma migrations
- `npm run prisma:studio` – open Prisma Studio

## Project structure

Feature-based architecture: each module owns its routes, controller,
service (business logic), repository (Prisma queries) and Zod schemas.

```
src/
  app.ts                 # Express app + middleware
  server.ts              # entry point
  config/
    env.ts               # validated environment variables
    prisma.ts            # Prisma client instance
  middleware/
    asyncHandler.ts
    auth.ts              # JWT auth guard
    errorHandler.ts
    validate.ts          # Zod request validation
  modules/
    auth/
      auth.controller.ts
      auth.repository.ts
      auth.routes.ts
      auth.schema.ts
      auth.service.ts
    customer/
      customer.controller.ts
      customer.repository.ts
      customer.routes.ts
      customer.schema.ts
      customer.service.ts
  utils/
    AppError.ts
    jwt.ts
prisma/
  schema.prisma
```

## Prisma + PostgreSQL Setup

If this system uses PostgreSQL with Prisma, install the adapter and driver:

```
npm install @prisma/adapter-pg pg
npm install --save-dev @types/pg
```

Then generate the Prisma client:

```
npx prisma generate
```

`npx prisma generate` reads `schema.prisma` and generates a type-safe database
client tailored to that schema. It gives you:

- **Type safety** – every model becomes a TypeScript type, so queries are
  autocompleted and typo'd/incorrect fields are caught at compile time.
- **A typed query builder** – `PrismaClient` exposes `.findMany()`, `.create()`,
  `.update()`, `.delete()`, etc. for each model, with `where`/`include`/`select`
  fully typed, so you don't need to write raw SQL.
- **The actual runtime code** – the generated client also contains the logic
  that turns those calls into SQL sent to Postgres via `PrismaPg`.

`schema.prisma` is the source of truth for your database structure, and
`prisma generate` compiles it into the client your app code uses to talk to
the database. Re-run it whenever `schema.prisma` changes (newer Prisma
versions also do this automatically via a `postinstall` hook, but running it
manually is always safe).

## API

| Method | Route                | Auth | Description          |
| ------ | -------------------- | ---- | --------------------- |
| GET    | `/health`            | No   | Health check          |
| POST   | `/api/auth/register` | No   | Register a new user   |
| POST   | `/api/auth/login`    | No   | Login, returns JWT    |
| GET    | `/api/auth/me`       | Yes  | Get current user      |
| GET    | `/api/customers`     | Yes  | List customers        |
| GET    | `/api/customers/:id` | Yes  | Get a customer        |
| POST   | `/api/customers`     | Yes  | Create a customer     |
| PATCH  | `/api/customers/:id` | Yes  | Update a customer     |
| DELETE | `/api/customers/:id` | Yes  | Delete a customer     |
