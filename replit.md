# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- `artifacts/neymar-jr/` — Single-page Neymar Jr. tribute landing page (React + Vite, Tailwind v4). Ported from a Next.js v0 project; the original `app/page.tsx` is now `src/App.tsx`, all sections live in `src/components/`, `next/link` was replaced with native `<a>` anchor links (the navbar uses hash-based scroll-to-section navigation), and Google Fonts (Inter + Space Mono) are loaded via `<link>` tags in `index.html`.
- `artifacts/api-server/` — Shared Express API server (scaffold; not yet used by the landing page).
- `artifacts/mockup-sandbox/` — Mockup/canvas sandbox (scaffold).
