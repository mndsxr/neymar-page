# Neymar Page

Página sobre Neymar Jr. construída com Next.js, React e Tailwind CSS.

## Pré-requisitos

- Node.js 18+
- pnpm (gerenciador de pacotes)

## Instalação

```bash
# Instalar dependências
pnpm install
```

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Inicia o servidor de produção |
| `pnpm lint` | Executa o linter |

## Executando o projeto

```bash
# Desenvolvimento
pnpm dev
```

O projeto estará disponível em `http://localhost:3000`.

## Estrutura do projeto

```
├── app/              # Páginas e layout do Next.js
├── components/       # Componentes React
│   └── ui/          # Componentes de UI (shadcn)
├── hooks/           # Custom hooks
├── lib/             # Utilitários
└── public/          # Arquivos estáticos
```

## Tecnologias

- Next.js 16
- React 19
- Tailwind CSS
- shadcn/ui
- TypeScript